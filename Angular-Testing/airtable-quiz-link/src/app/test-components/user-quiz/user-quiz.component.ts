import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import Airtable from 'airtable';    // import here to use the airtable thingies...
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-user-quiz',
  templateUrl: './user-quiz.component.html',
  styles: ``
})
export class UserQuizComponent {
  form: FormGroup;    // NB: you NEED constructor to initialize/instantiate a forms' fields
  uID:string = '';
  name:string = '';
  email:string = '';
  phoneNumber:string = '';
  zip:string = '';
  age:string = '';
  sex:string = '';

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      // uID:[], // uID removed. to be generated on airtable side
      name:[],
      email:[],
      phoneNumber:[],
      zip:[],    // NB: left as string, but for future, this may be turned into an "address" field if needed
      age:[],    // NB: left as string, but for future, this may be for a DOB
      sex:[], 
    })
  }

  submit() {
    const base = new Airtable({apiKey:environment.privateAccessToken}).base('appjD3ZsQFD6Lb9D7');  

    base('userTable').create(
      [
        {
          "fields": {
            // "uID": this.form.value.uID,  // uID removed. to be generated on airtable side
            "name": this.form.value.name ,
            "email": this.form.value.email ,
            "phoneNumber": this.form.value.phoneNumber ,
            "zip": this.form.value.zip ,
            "age": this.form.value.age ,
            "sex": this.form.value.sex 
          }
        },
      ],
      function(err:any, records:any) {
        if (err) {
          console.error(err);
          return;
        }
        records.forEach(function (record:any) {
          console.log(record.getId());
        });
      }
    );
  }
}