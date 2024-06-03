import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-treatment-history',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, 
    MatCheckboxModule,
    JsonPipe,
  ],
  templateUrl: './treatment-history.component.html',
  styleUrl: './treatment-history.component.scss'
})
export class TreatmentHistoryComponent {
  form:FormGroup;
  
  // Note that index is 1 referenced so the modulus operation in the .html correspons with the number of columns of options
  options = [
    { label: 'Bleach', reference: 'Bleach', index: 1},
    { label: 'Dye', reference: 'Dye', index: 2},
    { label: 'Relaxer', reference: 'Relaxer', index: 3},
    { label: 'Perm', reference: 'Perm', index: 4},
    { label: 'Not in the last 4 years', reference: 'NotRecent', index: 5},
    { label: 'None', reference: 'None', index: 6},
  ];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      Bleach: false,
      Dye: false,
      Relaxer: false,
      Perm: false,
      NotRecent: false,
      None: false,
    })
  }
}
