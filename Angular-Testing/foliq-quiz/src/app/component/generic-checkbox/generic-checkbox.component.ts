import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-generic-checkbox',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, 
    MatCheckboxModule,
  ],  
  templateUrl: './generic-checkbox.component.html',
  styleUrl: './generic-checkbox.component.scss'
})
export class GenericCheckboxComponent implements OnInit{
  form!:FormGroup;

  @Input() question!:string;
  @Input() options!:{label:string,reference:string}[];
  @Output() output = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit():void {
    let properties:any = {};

    for (let option of this.options)
      (properties)[option.reference] = false;

    this.form = this.fb.group(properties);
  }

  submit() { this.output.emit(this.form.getRawValue()); }
}
