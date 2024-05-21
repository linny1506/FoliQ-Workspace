import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';

import { SlideToggleComponent } from '../slide-toggle/slide-toggle.component';
import { InputComponent } from '../input/input.component';
import { InputFileComponent } from '../input-file/input-file.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-stepper',
  standalone: true,
  imports: [ MatButtonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    SlideToggleComponent, InputComponent, SliderComponent, InputFileComponent, RadioButtonComponent, StepperComponent,
  ],
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  isLinear=false;
}
