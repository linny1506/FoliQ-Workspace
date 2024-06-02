import { Component } from '@angular/core';
import { UserProfileQuizHairConcernsFormComponent } from '../components/user-profile-quiz-hair-concerns-form/user-profile-quiz-hair-concerns-form.component';



@Component({
  selector: 'app-user-profile-quiz',
  standalone: true,
  imports: [UserProfileQuizHairConcernsFormComponent],
  templateUrl: './user-profile-quiz.component.html',
  styleUrl: './user-profile-quiz.component.scss'
})
export class UserProfileQuizComponent {

}
