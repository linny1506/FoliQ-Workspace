import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';   // for whatever reason, ReactiveFormsModule import is needed for standalone module
import { MatButtonModule } from '@angular/material/button';


import { SlideToggleComponent } from '../simple-components-library/slide-toggle/slide-toggle.component';
import { InputComponent } from '../simple-components-library/input/input.component';
import { SliderComponent } from '../simple-components-library/slider/slider.component';
import { InputFileComponent } from '../simple-components-library/input-file/input-file.component';
import { RadioButtonComponent } from '../simple-components-library/radio-button/radio-button.component';
import { StepperComponent } from '../simple-components-library/stepper/stepper.component';
import { CheckboxComponent } from '../simple-components-library/checkbox/checkbox.component';

@Component({
  selector: 'app-simple-components',
  standalone: true,
  imports: [SlideToggleComponent, InputComponent, SliderComponent, InputFileComponent, RadioButtonComponent, StepperComponent, CheckboxComponent,
    CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './simple-components.component.html',
  styleUrl: './simple-components.component.scss',
})
export class SimpleComponentsComponent implements OnInit {
  pageNumber:number=0;
  pageMax:number=7;
  form:FormGroup;
  // pageQuery!:number;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      pageQuery:[],
    })
  }

  ngOnInit(): void {
  }

  home() { this.pageNumber = 0; }
  backPage() { if(0 < this.pageNumber)this.pageNumber--; }
  nextPage() { if(this.pageMax > this.pageNumber) this.pageNumber++; }
  seekPage() { 
    // console.log("seekPage");
    if(0 <= this.form.value.pageQuery && this.pageMax >= this.form.value.pageQuery) this.pageNumber = this.form.value.pageQuery; }
}
