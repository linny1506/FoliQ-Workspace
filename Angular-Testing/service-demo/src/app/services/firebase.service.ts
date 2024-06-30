import { Injectable, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore } from '@angular/fire/firestore';
import { Messaging } from '@angular/fire/messaging';
import { Storage, StorageReference, getDownloadURL, ref, uploadBytes, uploadBytesResumable } from '@angular/fire/storage';
import { deleteObject } from 'firebase/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // inject all the dependencies for the service here. NOTE that to inject, it MUST have a provider provided in app.config.ts
  firestore: Firestore = inject(Firestore);
  auth: Auth = inject(Auth);
  storage: Storage = inject(Storage);         // note storage is from @angular/fire/storage
  messaging: Messaging = inject(Messaging);
  ref?: StorageReference;   // TODO: MAKE THIS STATELESS??
  url?: string;
  constructor() { }

  /**
   * saveImage()
   * @param file file to be saved
   * @description based HEAVILY off of the https://firebase.google.com/codelabs/firebase-web project
   *    Saves an image to Firebase Cloud Storage
   * @version 2 This version implements the function to return the publicImageURL using an observable
   */
  saveImage(file:any): Observable<string> {
    try {
      // upload to Cloud Storage
      const filePath = `testFolder/${file.name}`;                           // NB: This is just a testFolder for the time being, I would like to link the userName to it to keep things organized
      const newImageRef = ref(this.storage, filePath);                      // creates the reference to the place in storage where the file's gonna go

      // Umimplemented:
      // this.ref = newImageRef;
      // old code:
      // 
      // const fileSnapshot = uploadBytesResumable(newImageRef, file);      // actual workhorse of the method
      // const publicImageURL = getDownloadURL(newImageRef);                // creates a public URL of the previously uploaded image
      // NB: old code here. using uploadBytesResumable(...) makes the function non-blocking HOWEVER creates a race condition between setting the image and fetching the file URL
      //    solution.. just bundle both options in a blockig function, decrease responsiveness, but increase reliability
      const publicImageURL = uploadBytes(newImageRef, file).then(() => getDownloadURL(newImageRef));        // Create Public URL


      return from(publicImageURL);
    } catch (error) {
      console.error("There was an error uploading a file to Cloud Storage: ", error);
      return from('ERROR');
    }
  }

  /* Unimplemented
  async deleteImage(ref:StorageReference) {
    try {
      deleteObject(ref);
    } catch (error) {
      console.error("There was an error deleting a file from Cloud Storage: ", error);
    }
  }
  */


}
