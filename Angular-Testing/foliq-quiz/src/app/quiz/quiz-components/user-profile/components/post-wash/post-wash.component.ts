import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-post-wash',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,
    MatRadioModule,
    JsonPipe,
  ],  templateUrl: './post-wash.component.html',
  styleUrl: './post-wash.component.scss'
})
export class PostWashComponent {
  // Solution modeled from this: https://stackoverflow.com/questions/46766308/how-to-bind-default-value-in-mat-radio-group-angular-reactive-forms
  form:FormGroup;

  options = [
    {label: 'Heat Style Daily', reference: 'daily', index:1},
    {label: 'Heat Style Occasionally', reference: 'occasionally', index:2},
    {label: 'Air Dry', reference: 'never', index:3},
  ];



  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      formOutput:[],
    })
  }
}
