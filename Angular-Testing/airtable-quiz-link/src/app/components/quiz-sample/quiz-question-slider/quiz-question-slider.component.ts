import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-quiz-question-slider',
  templateUrl: './quiz-question-slider.component.html',
  styles: ``,
})

export class QuizQuestionSliderComponent {  
  // code example: https://stackblitz.com/run?file=package.
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
}
