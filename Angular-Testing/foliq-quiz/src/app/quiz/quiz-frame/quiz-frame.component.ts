import { Component } from '@angular/core';

// Quiz Component Imports
import { HairTableQuizComponent } from '../quiz-components/hair-table/hair-table-quiz/hair-table-quiz.component';
import { UserProfileQuizComponent } from '../quiz-components/user-profile/user-profile-quiz/user-profile-quiz.component';
import { UserTableQuizComponent } from '../quiz-components/user-table/user-table-quiz/user-table-quiz.component';

// Imports for the Stepper and Angular Material Button
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quiz-frame',
  standalone: true,
  imports: [MatStepperModule, MatButtonModule,
    HairTableQuizComponent, UserProfileQuizComponent, UserTableQuizComponent,
  ],
  templateUrl: './quiz-frame.component.html',
  styleUrl: './quiz-frame.component.scss'
})
export class QuizFrameComponent {
  
}
