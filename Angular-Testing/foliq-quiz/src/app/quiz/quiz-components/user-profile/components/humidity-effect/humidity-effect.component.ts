import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-humidity-effect',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, 
    MatCheckboxModule,
    JsonPipe,
  ],  
  templateUrl: './humidity-effect.component.html',
  styleUrl: './humidity-effect.component.scss'
})
export class HumidityEffectComponent {
  form:FormGroup;
  
  // Note that index is 1 referenced so the modulus operation in the .html correspons with the number of columns of options
  options = [
    { label: 'Frizzy', reference: 'Frizzy', index: 1},
    { label: 'Dry', reference: 'Dry', index: 2},
    { label: 'Dull', reference: 'Dull', index: 3},
    { label: 'Lifeless', reference: 'Lifeless', index: 4},
    { label: 'Tangled', reference: 'Tangled', index: 5},
    { label: 'No Change', reference: 'NoChange', index: 6},
  ];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      Frizzy: false,
      Dry: false,
      Dull: false,
      Lifeless: false,
      Tangled: false,
      NoChange: false,
    })
  }
}
