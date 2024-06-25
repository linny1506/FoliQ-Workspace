import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { StorageReference } from '@angular/fire/storage';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss'
})
export class FileUploadComponent {
  publicImageURL?: string;
  ref?:StorageReference;
  firebaseService = inject(FirebaseService);

  // POST/PUT
  // NB: Firebase tracks files based off of file name, so if you upload a file with the same name, it replaces the original
  uploadImage(event: any) {
    const imageFile: File = event.target.files[0];                                      // retrieve file from .html side
    this.firebaseService.saveImage(imageFile).subscribe(x => this.publicImageURL = x);  // subscribe to Observable to get the url

    console.log("inside uploadImage");
  }

  // DELETE, unimplemented
  deleteImage() {
    this.ref ? this.firebaseService.deleteImage(this.ref) : null;
    console.log("inside deleteImage()");
  }

  uploadURLToAirtable() {
    console.log("inside uploadURLToAirtable()");
  }
}
