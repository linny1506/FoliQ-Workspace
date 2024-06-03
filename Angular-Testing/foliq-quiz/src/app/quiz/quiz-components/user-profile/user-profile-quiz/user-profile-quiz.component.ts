import { Component } from '@angular/core';
import { PostWashComponent } from '../components/post-wash/post-wash.component';
import { DryTimeComponent } from '../components/dry-time/dry-time.component';
import { ExersizeFrequencySliderComponent } from '../components/exersize-frequency-slider/exersize-frequency-slider.component';
import { GenericCheckboxComponent } from '../../../../component/generic-checkbox/generic-checkbox.component';
import { ShampooSliderComponent } from '../components/shampoo-slider/shampoo-slider.component';
import { StylingProductSliderComponent } from '../components/styling-product-slider/styling-product-slider.component';
import { ProductQuantitySliderComponent } from '../components/product-quantity-slider/product-quantity-slider.component';

@Component({
  selector: 'app-user-profile-quiz',
  standalone: true,
  imports: [PostWashComponent, DryTimeComponent,
    ExersizeFrequencySliderComponent, ShampooSliderComponent, StylingProductSliderComponent, ProductQuantitySliderComponent,
    GenericCheckboxComponent, 
  ],
  templateUrl: './user-profile-quiz.component.html',
  styleUrl: './user-profile-quiz.component.scss'
})
export class UserProfileQuizComponent {
  hairConcernsQuestion = 'What are some of your hair care concerns?';
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

  scalpConcernsQuestion = 'What are your scalp concerns?';
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

  // not generisized yet
  // postWashQuestion = 'What do you typically do after washing your hair?';
  // postWashForm = [
  //   {label: 'Heat Style Daily', reference: 'daily', index:1},
  //   {label: 'Heat Style Occasionally', reference: 'occasionally', index:2},
  //   {label: 'Air Dry', reference: 'never', index:3},
  // ];

  humidityEffectQuestion = 'What is your hair like when it is humid outside?';
  humidityEffectForm = [
    { label: 'Frizzy', reference: 'Frizzy', index: 1},
    { label: 'Dry', reference: 'Dry', index: 2},
    { label: 'Dull', reference: 'Dull', index: 3},
    { label: 'Lifeless', reference: 'Lifeless', index: 4},
    { label: 'Tangled', reference: 'Tangled', index: 5},
    { label: 'No Change', reference: 'NoChange', index: 6},
  ];

  treatmentHistoryQuestion = 'Has your hair gone through any of the following processes?';
  treatmentHistoryForm = [
    { label: 'Bleach', reference: 'Bleach', index: 1},
    { label: 'Dye', reference: 'Dye', index: 2},
    { label: 'Relaxer', reference: 'Relaxer', index: 3},
    { label: 'Perm', reference: 'Perm', index: 4},
    { label: 'Not in the last 4 years', reference: 'NotRecent', index: 5},
    { label: 'None', reference: 'None', index: 6},
  ];

  stylingProductQuestion = 'Do you use any styling products?';
  stylingProductForm = [
    { label: 'Curl Cream', reference: 'CurlCream', index:1},
    { label: 'Hair Serum', reference: 'HairSerum', index:2},
    { label: 'Oils', reference: 'Oils', index:3},
    { label: 'Gels', reference: 'Gels', index:4},
    { label: 'Souffle', reference: 'Souffle', index:5},
    { label: 'Refresh Spray', reference: 'RefreshSpray', index:6},
    { label: 'Hair Grease', reference: 'HairGrease', index:7},
    { label: 'Detanglers', reference: 'Detanglers', index:8},
    { label: 'Heat Protectants', reference: 'HeatProtectants', index:9},
    { label: 'Hair Sprays', reference: 'HairSprays', index:10},
    { label: 'Dry Shampoo', reference: 'DryShampoo', index:11},
    { label: 'Twisting Souffle', reference: 'TwistingSouffle', index:12},
    { label: 'Leave-In Conditioner', reference: 'LeaveInConditioner', index:13},
    { label: 'Styling Puttys', reference: 'StylingPuttys', index:14},
    { label: 'Other', reference: 'Other', index:15},
    { label: 'None', reference: 'None', index:16},
  ]

  scalpTreatmentQuestion = 'Do you use in any scalp treatments?';
  scalpTreatmentForm = [
    { label: 'Pre Poo', reference: 'PrePoo', index:1},
    { label: 'Scalp Treatment', reference: 'ScalpTreatment', index:2},
    { label: 'Hair Serum', reference: 'HairSerum', index:3},
    { label: 'No', reference: 'No', index:4},
  ]

  
}
