import { Component } from '@angular/core';

// Quiz Component Imports
import { UserTableQuizComponent } from '../quiz-components/user-table/user-table-quiz/user-table-quiz.component';

// Question Components
import { GenericCheckboxComponent } from '../../component/generic-checkbox/generic-checkbox.component';
import { PostWashComponent } from '../quiz-components/post-wash/post-wash.component';
import { GenericThumbLabelSliderComponent } from '../../component/generic-thumb-label-slider/generic-thumb-label-slider.component';
import { GenericFileSubmissionComponent } from '../../component/generic-file-submission/generic-file-submission.component';

// Imports for the Stepper and Angular Material Button
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { ChemicallyProcessedSliderComponent } from '../quiz-components/chemically-processed-slider/chemically-processed-slider.component';
import { HotToolsFrequencySliderComponent } from '../quiz-components/hot-tools-frequency-slider/hot-tools-frequency-slider.component';

@Component({
    selector: 'app-quiz-frame',
    standalone: true,
    templateUrl: './quiz-frame.component.html',
    styleUrl: './quiz-frame.component.scss',
    imports: [MatStepperModule, MatButtonModule,
        UserTableQuizComponent,
        GenericCheckboxComponent, GenericFileSubmissionComponent, GenericThumbLabelSliderComponent, PostWashComponent,
        ChemicallyProcessedSliderComponent, HotToolsFrequencySliderComponent,
      ]
})
export class QuizFrameComponent {
  // Pictures Resources #region
  middlePartPhotoQuestion = 'Please part your hair in the middle of you head and take an image at the top your head showing your scalp';
  backHeadPhotoQuestion = 'Please take a picture of the back of your head showing all of your hair';
  rightTemplePhotoQuestion = 'Please take a picture of your right temple showing your scalp';
  leftTemplePhotoQuestion = 'Please take a picture of your left temple showing your scalp';
  currentProductsPhotoQuestion = 'Please take pictures of the product(s) currently in your hair care routine';
  // #endregion

  // Hair/Scalp Profile resources #region
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

  dryTimeQuestion = 'How long does it take to dry your hair?'
  dryTimeParam = {
    min: 0,
    max: 4,
    step: 0.5,
    unit: 'hr',
  }


  humidityEffectQuestion = 'What is your hair like when it is humid outside?';
  humidityEffectForm = [
    { label: 'Frizzy', reference: 'Frizzy', index: 1},
    { label: 'Dry', reference: 'Dry', index: 2},
    { label: 'Dull', reference: 'Dull', index: 3},
    { label: 'Lifeless', reference: 'Lifeless', index: 4},
    { label: 'Tangled', reference: 'Tangled', index: 5},
    { label: 'No Change', reference: 'NoChange', index: 6},
  ];  

  // #endregion

  // Treatment/Lifestyle Profile resources #region
  treatmentHistoryQuestion = 'Has your hair gone through any of the following processes?';
  treatmentHistoryForm = [
    { label: 'Bleach', reference: 'Bleach', index: 1},
    { label: 'Dye', reference: 'Dye', index: 2},
    { label: 'Relaxer', reference: 'Relaxer', index: 3},
    { label: 'Perm', reference: 'Perm', index: 4},
    { label: 'Not in the last 4 years', reference: 'NotRecent', index: 5},
    { label: 'None', reference: 'None', index: 6},
  ];  

  exerciseFrequencyQuestion = 'How many times a week do you exercise?';
  exerciseFrequencyParams = {
    min: 0,
    max: 7,
    step: 0.5,
  }

  shampooFrequencyQuestion = 'How often did you shampoo each week?';
  shampooFrequencyParams = {
    min: 0,
    max: 7,
    step: 0.5,
  }



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

  stylingProductFrequencyQuestion = 'How often do you use styling products?';
  stylingProductFrequencyParams = {
    min: 0,
    max: 7,
    step: 1,
    unit: 'times per week',
  }

  scalpTreatmentQuestion = 'Do you use any in-scalp treatments?';
  scalpTreatmentForm = [
    { label: 'Pre Poo', reference: 'PrePoo', index:1},
    { label: 'Scalp Treatment', reference: 'ScalpTreatment', index:2},
    { label: 'Hair Serum', reference: 'HairSerum', index:3},
    { label: 'No', reference: 'No', index:4},
  ]  

  // #endregion

  productQuantityQuestion = 'How many products would you like in your hair care routine?';
  productQuantityParams = {
    min: 0,
    max: 8,
    step: 1,
  }

}
