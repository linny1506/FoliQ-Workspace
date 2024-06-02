import { Component } from '@angular/core';
import { HairConcernsFormComponent } from '../components/hair-concerns-form/hair-concerns-form.component';
import { ScalpConcernsFormComponent } from '../components/scalp-concerns-form/scalp-concerns-form.component';



@Component({
  selector: 'app-user-profile-quiz',
  standalone: true,
  imports: [HairConcernsFormComponent, ScalpConcernsFormComponent],
  templateUrl: './user-profile-quiz.component.html',
  styleUrl: './user-profile-quiz.component.scss'
})
export class UserProfileQuizComponent {

}
