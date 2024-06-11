import { Component } from '@angular/core';

// components associated with the userTable
import { UserTableFormComponent } from '../user-table-form/user-table-form.component';
import { GenericCheckboxComponent } from '../../../../component/generic-checkbox/generic-checkbox.component';

@Component({
  selector: 'app-user-table-quiz',
  standalone: true,
  imports: [UserTableFormComponent,
    GenericCheckboxComponent,
  ],
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

  raceEthnicityQuestion = 'What race/ethnicity or multiple do you closest genetically identify with?';
  raceEthnicityForm = [
    { label: 'Asian or Pacific Islander', reference: 'API', index: 1},
    { label: 'Black, African American, or African', reference: 'Black', index: 2},
    { label: 'Hispanic or Latino', reference: 'Latino', index: 3},
    { label: 'Native American or Alaskan Native', reference: 'AmericanNative', index: 4},
    { label: 'White, Caucasian, or European', reference: 'Caucasian', index: 5},
    { label: 'South Asian', reference: 'SouthAsian', index: 6},
    { label: 'Multiracial or Biracial', reference: 'MultiRacial', index: 7},
    { label: 'Not listed', reference: 'None', index: 8},
  ];


  // TODO: make a service to write it to Airtable :)

}
