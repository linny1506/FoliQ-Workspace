import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';



@Component({
  selector: 'app-hair-concerns-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, 
    MatCheckboxModule,
    JsonPipe,
  ],
  templateUrl: './hair-concerns-form.component.html',
  styleUrl: './hair-concerns-form.component.scss'
})
export class HairConcernsFormComponent {
  form:FormGroup;
  
  // Note that index is 1 referenced so the modulus operation in the .html correspons with the number of columns of options
  options = [
    { label: 'Growth', reference: 'Growth', index: 1},
    { label: 'Damage', reference: 'Damage', index: 2},
    { label: 'Dryness', reference: 'Dryness', index: 3},
    { label: 'Frizz', reference: 'Frizz', index: 4},
    { label: 'Manageability', reference: 'Manageability', index: 5},
    { label: 'Softness', reference: 'Softness', index: 6},
    { label: 'Strength', reference: 'Strength', index: 7},
    { label: 'Volume', reference: 'Volume', index: 8},
    { label: 'Length', reference: 'Length', index: 9},
    { label: 'Definition', reference: 'Definition', index: 10},
    { label: 'Hydrated Hair', reference: 'HydratedHair', index: 11},
    { label: 'Shine', reference: 'Shine', index: 12},
    { label: 'Healthier Hair', reference: 'HealthierHair', index: 13},
    { label: 'Healthy Scalp', reference: 'HealthyScalp', index: 14},
    { label: 'Other', reference: 'Other', index: 15},
    { label: 'None ', reference: 'None', index: 16},
  ];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      Growth: false,
      Damage: false,
      Dryness: false,
      Frizz: false,
      Manageability: false,
      Softness: false,
      Strength: false,
      Volume: false,
      Length: false,
      Definition: false,
      HydratedHair: false,
      Shine: false,
      HealthierHair: false,
      HealthyScalp: false,
      Other: false,
      None: false,      
    })
  }
}
