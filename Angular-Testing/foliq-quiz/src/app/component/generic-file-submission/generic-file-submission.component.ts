import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-file-submission',
  standalone: true,
  imports: [],
  templateUrl: './generic-file-submission.component.html',
  styleUrl: './generic-file-submission.component.scss'
})
export class GenericFileSubmissionComponent {
  @Input() question!:string;
}
