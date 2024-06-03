import { Component } from '@angular/core';
import { HairConcernsFormComponent } from '../components/hair-concerns-form/hair-concerns-form.component';
import { ScalpConcernsFormComponent } from '../components/scalp-concerns-form/scalp-concerns-form.component';
import { PostWashComponent } from '../components/post-wash/post-wash.component';
import { DryTimeComponent } from '../components/dry-time/dry-time.component';
import { HumidityEffectComponent } from '../components/humidity-effect/humidity-effect.component';
import { TreatmentHistoryComponent } from '../components/treatment-history/treatment-history.component';



@Component({
  selector: 'app-user-profile-quiz',
  standalone: true,
  imports: [HairConcernsFormComponent, ScalpConcernsFormComponent, PostWashComponent, DryTimeComponent, HumidityEffectComponent, TreatmentHistoryComponent],
  templateUrl: './user-profile-quiz.component.html',
  styleUrl: './user-profile-quiz.component.scss'
})
export class UserProfileQuizComponent {

}
