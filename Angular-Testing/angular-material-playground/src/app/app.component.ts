import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleComponentsComponent } from './test-components/simple-components/simple-components.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material-playground';
}
