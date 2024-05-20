import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';   // for whatever reason, ReactiveFormsModule import is needed for standalone module
import { MatButtonModule } from '@angular/material/button';

import { SlideToggleComponent } from '../slide-toggle/slide-toggle.component';
import { InputComponent } from '../input/input.component';
import { SliderComponent } from '../slider/slider.component';
import { InputFileComponent } from '../input-file/input-file.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';

@Component({
  selector: 'app-simple-components',
  standalone: true,
  imports: [SlideToggleComponent, InputComponent, SliderComponent, InputFileComponent, RadioButtonComponent,
    CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './simple-components.component.html',
  styleUrl: './simple-components.component.scss',
})
export class SimpleComponentsComponent implements OnInit {
  pageNumber:number=0;
  pageMax:number=6;
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
    if(0 < this.form.value.pageQuery && this.pageMax > this.form.value.pageQuery) this.pageNumber = this.form.value.pageQuery; }
}
