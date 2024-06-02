import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { QuizFrameComponent } from './quiz/quiz-frame/quiz-frame.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    QuizFrameComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foliq-quiz';
}
