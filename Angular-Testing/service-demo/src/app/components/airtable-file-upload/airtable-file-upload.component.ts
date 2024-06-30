import { Component, inject } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { AirtableFileUploadService } from '../../services/airtable-file-upload.service';

@Component({
  selector: 'app-airtable-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './airtable-file-upload.component.html',
  styleUrl: './airtable-file-upload.component.scss'
})
export class AirtableFileUploadComponent {
  firebaseService = inject(FirebaseService);
  airtableFileUploadService = inject(AirtableFileUploadService);
  publicImageURL?: string;
  file?:File;

  uploadImage(event:any) {
    const imageFile: File = event.target.files[0];
    this.firebaseService.saveImage(imageFile).subscribe(x => this.publicImageURL = x);
  }

  submit(){
    let fileName = (this.file) ? this.file.name : 'NO FILE NAME';
    this.publicImageURL ? this.airtableFileUploadService.upload(fileName, this.publicImageURL) : this.airtableFileUploadService.upload("testFileName", "NO FILE FOUND")
  }
}
