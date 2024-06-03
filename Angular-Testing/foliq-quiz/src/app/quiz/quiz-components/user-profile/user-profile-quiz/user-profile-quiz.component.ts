import { Component } from '@angular/core';
import { PostWashComponent } from '../components/post-wash/post-wash.component';
import { DryTimeComponent } from '../components/dry-time/dry-time.component';
import { HumidityEffectComponent } from '../components/humidity-effect/humidity-effect.component';
import { TreatmentHistoryComponent } from '../components/treatment-history/treatment-history.component';
import { ExersizeFrequencySliderComponent } from '../components/exersize-frequency-slider/exersize-frequency-slider.component';
import { GenericCheckboxComponent } from '../../../../component/generic-checkbox/generic-checkbox.component';



@Component({
  selector: 'app-user-profile-quiz',
  standalone: true,
  imports: [PostWashComponent, DryTimeComponent, HumidityEffectComponent, TreatmentHistoryComponent,
    ExersizeFrequencySliderComponent,
    GenericCheckboxComponent, 
  ],
  templateUrl: './user-profile-quiz.component.html',
  styleUrl: './user-profile-quiz.component.scss'
})
export class UserProfileQuizComponent {
  hairConcernsForm = [
    { label: 'Growth', reference: 'Growth', index: 1},
    { label: 'Damage', reference: 'Damage', index: 2},
    { label: 'Dryness', reference: 'Dryness', index: 3},
    { label: 'Frizz', reference: 'Frizz', index: 4},
    { label: 'Manageability', reference: 'Manageability', index: 5},
    { label: 'Softness', reference: 'Softness', index: 6},
    { label: 'Strength', reference: 'Strength', index: 7},
    { label: 'Volume', reference: 'Volume', index: 8},
    { label: 'Length', reference: 'Length', index: 9},
    { label: 'Definition', reference: 'Definition', index: 10},
    { label: 'Hydrated Hair', reference: 'HydratedHair', index: 11},
    { label: 'Shine', reference: 'Shine', index: 12},
    { label: 'Healthier Hair', reference: 'HealthierHair', index: 13},
    { label: 'Healthy Scalp', reference: 'HealthyScalp', index: 14},
    { label: 'Other', reference: 'Other', index: 15},
    { label: 'None ', reference: 'None', index: 16},
  ];

  scalpConcernsForm = [
    { label: 'Dandruff', reference: 'Dandruff', index: 1},
    { label: 'Oily Scalp', reference: 'OilyScalp', index: 2},
    { label: 'Dry Scalp', reference: 'DryScalp', index: 3},
    { label: 'Psoriasis', reference: 'Psoriasis', index: 4},
    { label: 'Seborrheic Eczema', reference: 'SeborrheicEczema', index: 5},
    { label: 'Hair Loss', reference: 'HairLoss', index: 6},
    { label: 'Other', reference: 'Other', index: 7},
    { label: 'None', reference: 'None', index: 8},
  ];


}
