import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-generic-radiobutton',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,
    MatRadioModule,
  ],
  templateUrl: './generic-radiobutton.component.html',
  styleUrl: './generic-radiobutton.component.scss'
})
export class GenericRadiobuttonComponent {
  form:FormGroup;
  @Input() question!:string;
  @Input() options!:{label:string,reference:string}[];
  @Output() output = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.form = fb.group({ formOutput:[], });
  }

  submit() { this.output.emit(this.form.getRawValue()); }
}
