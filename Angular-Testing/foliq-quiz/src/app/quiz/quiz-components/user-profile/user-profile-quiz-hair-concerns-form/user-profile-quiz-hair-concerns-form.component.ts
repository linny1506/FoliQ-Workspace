import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-user-profile-quiz-hair-concerns-form',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-quiz-hair-concerns-form.component.html',
  styleUrl: './user-profile-quiz-hair-concerns-form.component.scss'
})
export class UserProfileQuizHairConcernsFormComponent {
  @Output() userProfileQuizHairConcernsFormOutput:String = '';

  
}
