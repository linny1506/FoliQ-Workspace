import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';

@Component({
  selector: 'app-scalp-concerns-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, 
    MatCheckboxModule,
    JsonPipe,
  ],  templateUrl: './scalp-concerns-form.component.html',
  styleUrl: './scalp-concerns-form.component.scss'
})
export class ScalpConcernsFormComponent {
  form:FormGroup;

  // Note that index is 1 referenced so the modulus operation in the .html correspons with the number of columns of options
  options = [
    { label: 'Dandruff', reference: 'Dandruff', index: 1},
    { label: 'Oily Scalp', reference: 'OilyScalp', index: 2},
    { label: 'Dry Scalp', reference: 'DryScalp', index: 3},
    { label: 'Psoriasis', reference: 'Psoriasis', index: 4},
    { label: 'Seborrheic Eczema', reference: 'SeborrheicEczema', index: 5},
    { label: 'Hair Loss', reference: 'HairLoss', index: 6},
    { label: 'Other', reference: 'Other', index: 7},
    { label: 'None', reference: 'None', index: 8},
  ];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      Dandruff:false,
      OilyScalp:false,
      DryScalp:false,
      Psoriasis:false,
      SeborrheicEczema:false,
      HairLoss:false,
      Other:false,
      None:false,      
    })
  }
}
