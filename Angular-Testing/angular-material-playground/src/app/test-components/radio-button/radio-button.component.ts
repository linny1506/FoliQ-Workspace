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
    {label: 'Option 1', index: 'option1'},
    {label: 'Option 2', index: 'option2'},
    {label: 'Option 3', index: 'option3'},
    {label: 'Option 4', index: 'option4'},
    {label: 'None of the Above', index: 'option5'},
  ]

  // NB: alternative way of dependency injection
  // fb = inject(FormBuilder);

  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      selectedOption: ['', Validators.required],
    })
  }

  poll(){
    console.log("poll(): ", this.form.value.selectedOption); 
  }
}
