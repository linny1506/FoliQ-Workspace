import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import Airtable from 'airtable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Content {
  fields: Fields
}

interface Fields {
  fileName: string
  file: File[]
}

interface File {
  url: string
}




@Injectable({
  providedIn: 'root'
})
export class AirtableFileUploadService {
  // using Raw HTML post request
  http = inject(HttpClient);

  // The airtable.js API is not required for this anymore
  // base = new Airtable({apiKey:environment.airtable.privateAccessToken}).base(environment.airtable.baseID);

  upload(fileName:string, url:string) {
    let output: any;

    let content:Content = {
      "fields": {
        "fileName": fileName,
        "file": [{ "url": url, }]
      }
    };

    output = this.http.post(environment.airtable.fileTableURL,
      content,
      {
        headers: new HttpHeaders({
          // 'Content-Type' : 'application/json; charset=utf-8',    // This isn't needed since it's probably implicit because the content is already in JSON
          Authorization: 'Bearer patOxK3aX3qlbbKpx.884c70d8d90db6e40ec31960795cb682016f5f32623916d406437f8a1e722c3b',
        })
      }
    );
    
    // console.log('in upload()');
    output.subscribe(console.log('AirtableFileUploadServie.upload(), output subscribed'));
  }
}