import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-preferences-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './preferences-form.component.html',
  styleUrl: './preferences-form.component.scss'
})
export class PreferencesFormComponent {
  form: FormGroup;
  @Output() preferencesFormOutput = new EventEmitter<string>();

  constructor(private fb:FormBuilder) {
    this.form = fb.group({
      budget:[],
      shopPref:[],
      zip:[],
    })
  }

  submit() {
    this.preferencesFormOutput.emit(this.form.value);
  }
}
