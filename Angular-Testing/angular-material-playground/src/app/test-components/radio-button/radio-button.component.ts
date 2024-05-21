import { Component } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';

import { FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
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

  options = [
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
    {label: 'Option 4', value: 'option4'},
    {label: 'None of the Above', value: 'option5'},
  ]

  // NB: alternative way of dependency injection
  // fb = inject(FormBuilder);

  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      selectedOption: ['', Validators.required],
    })
  }

  submit() {
    console.log("submit: ", this.form.value);
    
  }
}
