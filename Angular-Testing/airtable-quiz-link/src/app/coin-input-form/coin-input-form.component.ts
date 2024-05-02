import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TotalCount } from '../TotalCount';
import Airtable from 'airtable';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-coin-input-form',
  templateUrl: './coin-input-form.component.html',
  styles: ``
})

export class CoinInputFormComponent{
  form: FormGroup;
  coinOptions:string[] = ['Penny','Nickle','Dime','Quarter','Half-Dollar','Dollar','PennyRoll','NickleRoll','DimeRoll','QuarterRoll',];




  constructor(private fb: FormBuilder, private http:HttpClient){
    this.form = fb.group({
      Coin: [this.coinOptions[0]],    // first option in coinOpions is given since that'll be the first thing displayed in the list
      Count: ['0'],
    })
  }

  submit() {
    console.log(this.form.value.Count);
    console.log(this.form.value.Coin);

    // inline object with the property apiKey value --> value is from the src/environment/environment.ts
    const base = new Airtable({apiKey:environment.privateAccessToken}).base(environment.baseID);

    let id:string = '';

    // the id is generated from the Airtable --> NB there's probably a better way of doing this, with actual requests, but this is what we got now soo...
    switch(this.form.value.Coin){
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

    base('TotalCount').update(id, {
      "Count": parseInt(this.form.value.Count),  // string interpolation, or just "+number", or ''+number
      "Coin": this.form.value.Coin,
    }, function(err: any, record: any) {
      if (err) {
        console.error(err);
        return;
      }
      console.log(record.get('Value'));
    });
  }

}