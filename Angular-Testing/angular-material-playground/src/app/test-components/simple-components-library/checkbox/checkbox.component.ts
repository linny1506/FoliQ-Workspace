import { Component } from '@angular/core';
import { JsonPipe } from '@angular/common';

import {MatRadioModule} from '@angular/material/radio';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [MatRadioModule, FormsModule, MatCheckboxModule, MatCardModule, ReactiveFormsModule, JsonPipe, MatLabel],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss'
})
export class CheckboxComponent {
  toppings = this.formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private formBuilder: FormBuilder) {}
}
