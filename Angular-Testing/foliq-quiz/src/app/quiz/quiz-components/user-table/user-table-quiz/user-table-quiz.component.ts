import { Component, Input } from '@angular/core';

// components associated with the userTable
import { UserTableFormComponent } from '../user-table-form/user-table-form.component';

@Component({
  selector: 'app-user-table-quiz',
  standalone: true,
  imports: [UserTableFormComponent],
  templateUrl: './user-table-quiz.component.html',
  styleUrl: './user-table-quiz.component.scss'
})
export class UserTableQuizComponent {
  formData!:String;

  // Code example based off of this: https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/
  
  GetData(formData:String){
    console.log("From Parent: ", formData);
    this.formData = formData;
  }

  // TODO: make a service to write it to Airtable :)

}
