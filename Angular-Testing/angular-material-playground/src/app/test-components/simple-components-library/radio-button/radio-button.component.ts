import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,
    MatRadioModule,
    JsonPipe,
  ],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  // Solution modeled from this: https://stackoverflow.com/questions/46766308/how-to-bind-default-value-in-mat-radio-group-angular-reactive-forms

  form!:FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      options:[],
    })
  }

}
