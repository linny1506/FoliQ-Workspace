import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoinInputFormComponent } from './components/coin-input-form/coin-input-form.component';
import { CoinTallyComponent } from './components/coin-tally/coin-tally.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CoinInputFormComponent, CoinTallyComponent,
    FileUploadComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'service-demo';
}
