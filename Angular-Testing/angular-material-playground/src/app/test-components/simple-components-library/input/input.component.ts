import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, FormControl, FormGroup, FormBuilder, ReactiveFormsModule} from '@angular/forms';
// NB: ReactiveFormsModule required for FOrmGroup to work
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name:[],
      email:[],
      phoneNumber:[],
      textBody:[],
    })
  }

  submit() {
    console.log("submit()");
    console.log("Name: ", this.form.value.name);
    console.log("Email: ", this.form.value.email);
    console.log("Phone Number: ", this.form.value.phoneNumber);
    console.log("textBody: ", this.form.value.textBody);
  }
}
