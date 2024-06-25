import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoinInputFormComponent } from './components/coin-input-form/coin-input-form.component';
import { CoinTallyComponent } from './components/coin-tally/coin-tally.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AirtableFileUploadComponent } from './components/airtable-file-upload/airtable-file-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CoinInputFormComponent, CoinTallyComponent,
    FileUploadComponent,
    AirtableFileUploadComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'service-demo';
}
