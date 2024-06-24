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
  ref?:StorageReference;
  firebaseService = inject(FirebaseService);

  uploadImage(event: any) {
    const imageFile: File = event.target.files[0];
    imageFile ? this.firebaseService.saveImage(imageFile) : null;
    this.ref = this.firebaseService.getRef();
  }

  deleteImage() {
    this.ref ? this.firebaseService.deleteImage(this.ref) : console.error("Error Deleting image in file-upload.component.ts");
  }
}
