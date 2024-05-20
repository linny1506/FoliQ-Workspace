import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [MatRadioModule, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss'
})
export class RadioButtonComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      value1:[],
      value2:[],
      value3:[],
      value4:[],
      value5:[],
    })
  }

  submit() {
    console.log("submit: ", this.form.value);
    
  }
}
