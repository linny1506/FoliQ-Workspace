import {Component, EventEmitter, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormGroup, FormBuilder, ReactiveFormsModule, Form} from '@angular/forms';

@Component({
  selector: 'app-user-table-form',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './user-table-form.component.html',
  styleUrl: './user-table-form.component.scss'
})
export class UserTableFormComponent {
  form: FormGroup;

  @Output() userTableFormOutput = new EventEmitter<string>();

  
  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name:[],
      email:[],
    })
  }

  // Submit method also triggers the event for the output to the UserTable
  submit() {
    // console.log("submit()");
    // console.log("value: ", this.form);
    this.userTableFormOutput.emit(this.form.getRawValue());
    // this.form.reset();
  }
}
