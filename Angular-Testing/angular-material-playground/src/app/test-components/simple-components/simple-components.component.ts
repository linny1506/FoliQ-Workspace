import { Component, Input, OnInit} from '@angular/core';
import { SlideToggleComponent } from '../slide-toggle/slide-toggle.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';   // for whatever reason, ReactiveFormsModule import is needed for standalone module
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-simple-components',
  standalone: true,
  imports: [SlideToggleComponent, CommonModule, ReactiveFormsModule, MatButtonModule],
  templateUrl: './simple-components.component.html',
  styleUrl: './simple-components.component.scss',
})
export class SimpleComponentsComponent implements OnInit {
  pageNumber:number=0;
  pageMax:number=5;
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
