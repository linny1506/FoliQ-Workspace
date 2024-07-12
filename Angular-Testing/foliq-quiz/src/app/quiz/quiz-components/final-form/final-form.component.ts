import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-final-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatFormFieldModule, MatInputModule,
  ],
  templateUrl: './final-form.component.html',
  styleUrl: './final-form.component.scss'
})
export class FinalFormComponent {
  form: FormGroup;
  @Output() output = new EventEmitter<string>();

  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      questions:[],
      consent:[],
      orderNumber:[],
    })
  }

  submit() {
    this.output.emit(this.form.value);
  }
}