import { Component, inject } from '@angular/core';
import { FirestoreFileCdnService } from '../../services/firestore-file-cdn.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-file-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './file-form.component.html',
  styleUrl: './file-form.component.scss'
})
export class FileFormComponent {
  form: FormGroup;

  firestore = inject(FirestoreFileCdnService);

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      name:[],
      color:[],
      age:[],
    })
  }

  addRobot() {
    this.firestore.createRobot(this.form.value.name, this.form.value.color, this.form.value.age);
  }
}
