import { JsonPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

interface option {
  label:string,
  reference:string,
}

@Component({
  selector: 'app-generic-radiobutton',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,
    MatRadioModule, JsonPipe,
  ],
  templateUrl: './generic-radiobutton.component.html',
  styleUrl: './generic-radiobutton.component.scss'
})
export class GenericRadiobuttonComponent {
  form:FormGroup;
  @Input() question!:string;
  @Input() options!:{label:string,reference:string}[];

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      formOutput:[],
    });
  }
}
