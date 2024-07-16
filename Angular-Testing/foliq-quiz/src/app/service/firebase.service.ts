import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { from, Observable,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore:Firestore = inject(Firestore);
  storage: Storage = inject(Storage);

  getImageURL(user:string, fileName:string, file:File): Observable<string> {
    try {
      let newFile = new File([file], `${fileName}`, { type: file.type, lastModified: file.lastModified });

      const filePath = `${user}/${fileName}`;
      const newImageRef = ref(this.storage, filePath);

      const publicImageURL = uploadBytes(newImageRef, newFile).then(() => getDownloadURL(newImageRef));
      
      return from(publicImageURL);
    } catch (error) {
      console.error("There was an error uploading a file to Firebase Cloud Storage: ", error);
      return from('ERROR');
    }
  }

}
