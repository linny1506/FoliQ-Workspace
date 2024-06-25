import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import Airtable from 'airtable';


@Injectable({
  providedIn: 'root'
})
export class AirtableFileUploadService {
  base = new Airtable({apiKey:environment.airtable.privateAccessToken}).base(environment.airtable.baseID);

  upload(fileName:string, url:string) {
    this.base(environment.airtable.fileTableID).create({
      fileName:"fileName",
      file:[],
    });
  }
}