import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-file-submission',
  standalone: true,
  imports: [],
  templateUrl: './generic-file-submission.component.html',
  styleUrl: './generic-file-submission.component.scss'
})
export class GenericFileSubmissionComponent {
  @Input() question!:string;
  @Output() fileOutput = new EventEmitter<File>();

  submit(event:any) {
    const imageFile:File = event.target.files[0];
    this.fileOutput.emit(imageFile);
  }
}
