import { inject, Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';
import { from, Observable,delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Dependency Injection
  firestore:Firestore = inject(Firestore);
  storage: Storage = inject(Storage);

  /** getImageURL() 
   * @param user string, name of user associated with the file
   * @param fileName string, given name of the file to be saved
   * @param file file, actual file itself
   * @returns Observable<string>, an observable containing the URL to the file uploaded to the firebase CDN
   * @description takes a file and uploads the file to the connected firebase cloud storage destination with the location of `${user}/${fileName}.$`. The goal is to prevent overstorage of a single individuals files
   * @TODO make a better way of storing unique files that doesn't rely on unique names
   */
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
