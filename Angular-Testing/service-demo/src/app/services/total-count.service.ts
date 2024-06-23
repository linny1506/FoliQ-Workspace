import { Injectable, inject } from '@angular/core';   // inject allows for the use of the `inject()` function (it's an alternative for constructor dependency injection)
import Airtable from 'airtable';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';    // allows for http actions inside of this jawn
import { Observable } from 'rxjs';
import { TotalCount } from '../TotalCount';

@Injectable({
  providedIn: 'root'
})
export class TotalCountService {
  // inline object with the property apiKey value --> value is from the src/environment/environment.ts
  base = new Airtable({apiKey:environment.airtable.privateAccessToken}).base(environment.airtable.baseID);

  http = inject(HttpClient);

  constructor() { }

  // example method without Airtable.js API in use
  read(): Observable<TotalCount> {
    let output: Observable<TotalCount>;

    output = this.http.get<TotalCount>(
      'https://api.airtable.com/v0/appjD3ZsQFD6Lb9D7/TotalCount',
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer patOxK3aX3qlbbKpx.884c70d8d90db6e40ec31960795cb682016f5f32623916d406437f8a1e722c3b'
        })
      }
    );
  
    return output;
  }

  update(coin:string, count:string):void {
    let id:string = '';

    // the id is generated from the Airtable --> NB there's probably a better way of doing this, with actual requests, but this is what we got now soo...
    switch(coin){
      case 'Penny': id="rec6SlYqbLdnLR9V1"; break; 
      case 'Nickle': id="recQneInVQyltALLR"; break; 
      case 'Dime': id="recOimvwIhosSuyGr"; break; 
      case 'Quarter': id="reccXbZjMY4GHvzyM"; break; 
      case 'Half-Dollar': id="recTNEvRlyQg29toP"; break; 
      case 'Dollar': id="recpsb0TfXDmUQew1"; break; 
      case 'PennyRoll': id="recQulsEyNVdyOQbz"; break; 
      case 'NickleRoll': id="reciAfyeWzqpcpq2W"; break; 
      case 'DimeRoll': id="recKXIP88LYc6RKZp"; break; 
      case 'QuarterRoll': id="recdFK7xn4o1b3x4k"; break; 
      default: console.error("invalid case statement input"); break;
    }

    this.base('TotalCount').update(id, {
      "Count": parseInt(count),  // string interpolation, or just "+number", or ''+number
      "Coin": coin,
    }, function(err: any, record: any) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record.get('Value'));
    });
  }

}
