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

  // base = new Airtable({apiKey:environment.airtable.privateAccessToken}).base(environment.airtable.baseID);

  upload(fileName:string, url:string) {
    let output: any;

    let endpointURL = 'https://api.airtable.com/v0/appjD3ZsQFD6Lb9D7/fileTable';
    let photoURL = 'https://firebasestorage.googleapis.com/v0/b/service-demo-20c1f.appspot.com/o/testFolder%2Ftest%203.png?alt=media&token=a5f695bd-9f04-4b18-8a6f-2a8b27feec03';
    let content:Content = {
      "fields": {
        "fileName": fileName,
        "file": [
          {
            "url": url,
          }
        ]
      }
    };

    output = this.http.post(endpointURL,
      content,
      {
        headers: new HttpHeaders({
          // 'Content-Type' : 'application/json; charset=utf-8',
          Authorization: 'Bearer patOxK3aX3qlbbKpx.884c70d8d90db6e40ec31960795cb682016f5f32623916d406437f8a1e722c3b',
          
        }
      )
      }
    );

    
    console.log('in upload()');
    output.subscribe(console.log('subscribed'));
  }
}