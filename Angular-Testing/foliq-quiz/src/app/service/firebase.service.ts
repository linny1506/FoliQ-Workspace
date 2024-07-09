import { inject, Injectable } from '@angular/core';
import { Auth, signInAnonymously, UserCredential } from '@angular/fire/auth';
import { getDownloadURL, ref, Storage, uploadBytes } from '@angular/fire/storage';
import { Firestore } from 'firebase/firestore';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // for everything
  firestore:Firestore = inject(Firestore);
  auth:Auth = inject(Auth);
  storage:Storage = inject(Storage);    // note Storage is from @angular/fire/storage   -- this MUST be imported for it to work
  user!:UserCredential;

  // stateful service :(
  constructor() {}

  signIn() {
    signInAnonymously(this.auth).then((result) => {
      this.user = result;
    })
  }

  /**
   * saveImage() uses the firebase cloud storage API to generate a public CDN URL 
   * @param file the file to be uploaded
   * @param imageName specific name of the image (eg. scalp, leftTemple, rightTemple, back, products)
   * @returns the imageURL in an Observable<string>
   */
  saveImage(file:any, imageName:string): Observable<string> {
    try {
      // upload to Cloud Storage
      const filePath = `${this.user.user.getIdToken()}/${imageName}`;
      const newImageRef = ref(this.storage, filePath);
      const publicImageURL = uploadBytes(newImageRef,file).then(() => getDownloadURL(newImageRef));

      return from(publicImageURL);
    } catch (error) {
      console.error("There was an error uploading a file to Cloud Storage: ", error);
      return from("ERROR");
    }
  }








  
}