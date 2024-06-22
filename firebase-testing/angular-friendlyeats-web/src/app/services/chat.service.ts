import { inject, Injectable } from '@angular/core';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, user, User, } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { DocumentReference, Firestore, updateDoc, collection, addDoc, collectionData, serverTimestamp, query, orderBy, limit, DocumentData, FieldValue, } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytesResumable, } from '@angular/fire/storage';
import { Messaging, } from '@angular/fire/messaging';
import { Router } from '@angular/router';

type ChatMessage = {
  name: string | null,
  profilePicUrl: string | null,
  timestamp: FieldValue,
  uid: string | null,
  text?: string,
  imageUrl?: string
};

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  storage: Storage = inject(Storage);
  messaging: Messaging = inject(Messaging);
  router: Router = inject(Router);
  private provider = new GoogleAuthProvider();
  LOADING_IMAGE_URL = 'https://www.google.com/images/spin-32.gif?a';

  // observable that is updated when the auth state changes
  user$ = user(this.auth);    // user() is a function provide by AngularFire. returns an observable. The observable will trigger every time there's a state change to authentication (sign-in event, sign-out event).
  currentUser: User | null = this.auth.currentUser;
  userSubscription: Subscription;
  
  constructor() {
    this.userSubscription = this.user$.subscribe(
      (aUser: User | null) => { this.currentUser = aUser; }
    );
  }

  // Login Friendly Chat.
  login() {
    signInWithPopup(this.auth, this.provider)     // signInWithPopup, premade function. note above where this.auth and this.provider are coming from
    .then(                                        // then is just a stream operator which executes once the "promise" is completed (it's a callback operator). the parameter is a function
      (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);   // create a new credential
        this.router.navigate(['/', 'chat']);      // router changes the page to a different one :-)
        return credential;                                                    // return that newly created credential
    }
  )
}

  // Logout of Friendly Chat.
  logout() {
    signOut(this.auth)                            // signOut(), provided from firebase/auth
    .then(                                        // followed by the .then() callback operator
      () => {
        this.router.navigate(['/', 'login'])      // router instructions to change the page again
        console.log('signed out');
      }
    ).catch( (error) => { console.log('sign out error: ' + error); } ); // required error handling
  }

  // Adds a text or image message to Cloud Firestore.
  addMessage = async (textMessage: string | null, imageUrl: string | null,): Promise<void | DocumentReference<DocumentData>> => {
    // ignore empty messages
    if (!textMessage && !imageUrl) { console.log("addMessage was called without a message", textMessage, imageUrl,); return; }
    if (this.currentUser === null) { console.log("addMessage requires a signed-in user"); return; }

    const message: ChatMessage = {
      name: this.currentUser.displayName,
      profilePicUrl: this.currentUser.photoURL,
      timestamp: serverTimestamp(),
      uid: this.currentUser?.uid,
    };

    textMessage && (message.text = textMessage);
    imageUrl && (message.imageUrl = imageUrl);

    try {
      const newMessageRef = await addDoc(collection(this.firestore, "messages"), message,);
      return newMessageRef;
    } catch (error) {
      console.error("Error writing new message to Firebase Database", error);
      return;
    }
  };

  // Saves a new message to Cloud Firestore.
  saveTextMessage = async (messageText: string) => {
    return this.addMessage(messageText, null);
  };

  // Loads chat message history and listens for upcoming ones.
  loadMessages = () => {
    // Create the query to load the last 12 messages and listen for new ones.
    const recentMessagesQuery = query(          // parameters are a list of constraints
      collection(this.firestore, 'messages'),   // define what collection to listen to
      orderBy('timestamp', 'desc'),             // order by the field 'timestamp'
      limit(12),                                // limit to retreive only 12 entries, since descending, it's newest 12 (unix time, so higher is newer)
    );
    
    // Start listening to the query.
    return collectionData(recentMessagesQuery);
  }

  // Saves a new message containing an image in Firestore.
  // This first saves the image in Firebase storage.
  saveImageMessage = async(file: any) => {
    try { // note that everything here is in a try-catch block
      // 1 - Add a message with a loading icon that will get updated with the shared image.
      const messageRef = await this.addMessage(null, this.LOADING_IMAGE_URL);   // add message is defined here in chat.service.ts


      // Actual file upload code starts here...
      // 2 - Upload the image to Cloud Storage.
      const filePath = `${this.auth.currentUser?.uid}/${file.name}`;      // Using string interpolation, create a filePath name [uid]/[filename]. auth is from an injected thing
      const newImageRef = ref(this.storage, filePath);                    // returns a reference from the provided storage (this.storage) refers to the firebase storage
      const fileSnapshot = await uploadBytesResumable(newImageRef, file); // This function is the one that actually uploads the file from local to cloud storage

      // 3 - Generate a public URL for the file.
      const publicImageUrl = await getDownloadURL(newImageRef);           // Retrieve a public URL from the jawn

      // 4 - Update the chat message placeholder with the image's URL.
      messageRef ? await updateDoc(messageRef, { imageUrl: publicImageUrl, storageUri: fileSnapshot.metadata.fullPath }): null;   // ITS A TERNARY OPERATOR YOU DUMMY 🤦‍♂️🤦‍♂️
    } catch (error) {
      console.error('There was an error uploading a file to Cloud Storage:', error);
    }
  }

  async updateData(path: string, data: any) {}

  async deleteData(path: string) {}

  getDocData(path: string) {}

  getCollectionData(path: string) {}

  async uploadToStorage(
    path: string,
    input: HTMLInputElement,
    contentType: any
  ) {
    return null;
  }
  // Requests permissions to show notifications.
  requestNotificationsPermissions = async () => {};

  saveMessagingDeviceToken = async () => {};
}
