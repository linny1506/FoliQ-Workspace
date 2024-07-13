import { Component } from '@angular/core';

// Question Components
import { GenericCheckboxComponent } from '../../component/generic-checkbox/generic-checkbox.component';
import { GenericThumbLabelSliderComponent } from '../../component/generic-thumb-label-slider/generic-thumb-label-slider.component';
import { GenericFileSubmissionComponent } from '../../component/generic-file-submission/generic-file-submission.component';
import { GenericRadiobuttonComponent } from '../../component/generic-radiobutton/generic-radiobutton.component';

// Forms
import { UserTableFormComponent } from '../quiz-components/user-table-form/user-table-form.component';
import { PreferencesFormComponent } from '../quiz-components/preferences-form/preferences-form.component';
import { FinalFormComponent } from '../quiz-components/final-form/final-form.component';

// Custom Components

// Angular Material Imports
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { HairTextureQuestionComponent } from '../quiz-components/hair-texture/hair-texture-question/hair-texture-question.component';

@Component({
    selector: 'app-quiz-frame',
    standalone: true,
    templateUrl: './quiz-frame.component.html',
    styleUrl: './quiz-frame.component.scss',
    imports: [ GenericCheckboxComponent, GenericThumbLabelSliderComponent, GenericFileSubmissionComponent, GenericRadiobuttonComponent,
      UserTableFormComponent, PreferencesFormComponent, FinalFormComponent,
      HairTextureQuestionComponent,
      MatStepperModule, MatButtonModule,
      ]
})
export class QuizFrameComponent {
  // #region  1) Initial Information
  name!:string;
  email!:string;
  // IO Code example based off of this: https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/  
  GetUserTableData(formData:any){
    this.name = formData.name;
    this.email = formData.email;
  }

  raceEthnicityQuestion = 'What race/ethnicity or multiple do you closest genetically identify with?';
  raceEthnicityForm = [
    { label: 'Asian or Pacific Islander', reference: 'API'},
    { label: 'Black, African American, or African', reference: 'Black'},
    { label: 'Hispanic or Latino', reference: 'Latino'},
    { label: 'Native American or Alaskan Native', reference: 'AmericanNative'},
    { label: 'White, Caucasian, or European', reference: 'Caucasian'},
    { label: 'South Asian', reference: 'SouthAsian'},
    { label: 'Multiracial or Biracial', reference: 'MultiRacial'},
    { label: 'Not listed', reference: 'None'},
  ];
  raceEthnicity!:string;
  getRaceEthnicityData(output:any) { this.raceEthnicity = output; }
  // #endregion

  // #region  2) Pictures 
  middlePartPhotoQuestion = 'Please part your hair in the middle of you head and take an image at the top your head showing your scalp';
  middlePartFile!:File;
  middlePartFileListener(file:File) { this.middlePartFile = file; };

  backHeadPhotoQuestion = 'Please take a picture of the back of your head showing all of your hair';
  backHeadFile!:File;
  backHeadFileListener(file:File) { this.backHeadFile = file; };

  rightTemplePhotoQuestion = 'Please take a picture of your right temple showing your scalp';
  rightTempleFile!:File;
  rightTempleFileListener(file:File) { this.rightTempleFile = file; };

  leftTemplePhotoQuestion = 'Please take a picture of your left temple showing your scalp';
  leftTempleFile!:File;
  leftTempleFileListener(file:File) { this.leftTempleFile = file; };

  currentProductsPhotoQuestion = 'Please take pictures of the product(s) currently in your hair care routine';
  currentProductsFile!:File;
  currentProductsFileListener(file:File) { this.currentProductsFile = file; };
  // #endregion

  // #region  3) Hair/Scalp Profile 
  hairConcernsQuestion = 'What are some of your hair care concerns?';
  hairConcernsForm = [
    { label: 'Growth', reference: 'Growth'},
    { label: 'Damage', reference: 'Damage'},
    { label: 'Dryness', reference: 'Dryness'},
    { label: 'Frizz', reference: 'Frizz'},
    { label: 'Manageability', reference: 'Manageability'},
    { label: 'Softness', reference: 'Softness'},
    { label: 'Strength', reference: 'Strength'},
    { label: 'Volume', reference: 'Volume'},
    { label: 'Length', reference: 'Length'},
    { label: 'Definition', reference: 'Definition'},
    { label: 'Hydrated Hair', reference: 'HydratedHair'},
    { label: 'Shine', reference: 'Shine'},
    { label: 'Healthier Hair', reference: 'HealthierHair'},
    { label: 'Healthy Scalp', reference: 'HealthyScalp'},
    { label: 'Other', reference: 'Other'},
    { label: 'None ', reference: 'None'},
  ];
  hairConcerns!:string;
  gethairConcernsData(output:any) { this.hairConcerns = output; }

  scalpConcernsQuestion = 'What are your scalp concerns?';
  scalpConcernsForm = [
    { label: 'Dandruff', reference: 'Dandruff'},
    { label: 'Oily Scalp', reference: 'OilyScalp'},
    { label: 'Dry Scalp', reference: 'DryScalp'},
    { label: 'Psoriasis', reference: 'Psoriasis'},
    { label: 'Seborrheic Eczema', reference: 'SeborrheicEczema'},
    { label: 'Hair Loss', reference: 'HairLoss'},
    { label: 'Other', reference: 'Other'},
    { label: 'None', reference: 'None'},
  ];
  scalpConcerns!:string;
  getscalpConcernsData(output:any) { this.scalpConcerns = output; }

  dryTimeQuestion = 'How long does it take to dry your hair?'
  dryTimeParam = {
    min: 0,
    max: 4,
    step: 0.5,
    unit: 'hr',
  };
  dryTime!:string;
  getdryTimeData(output:any) { this.dryTime = output; }

  postWashQuestion = 'What do you typically do after washing your hair?';
  postWashOptions = [
    { label: 'Heat Style Daily', reference: 'daily'},
    { label: 'Heat Style Occasionally', reference: 'occasionally'},
    { label: 'Air Dry', reference: 'never'},
  ];
  postWash!:string;
  getpostWashData(output:any) { this.postWash = output; }

  humidityEffectQuestion = 'What is your hair like when it is humid outside?';
  humidityEffectForm = [
    { label: 'Frizzy', reference: 'Frizzy'},
    { label: 'Dry', reference: 'Dry'},
    { label: 'Dull', reference: 'Dull'},
    { label: 'Lifeless', reference: 'Lifeless'},
    { label: 'Tangled', reference: 'Tangled'},
    { label: 'No Change', reference: 'NoChange'},
  ];
  humidityEffect!:string;
  gethumidityEffectData(output:any) { this.humidityEffect = output; }
  // #endregion

  // #region  4) Treatment/Lifestyle Profile 
  treatmentHistoryQuestion = 'Has your hair gone through any of the following processes?';
  treatmentHistoryForm = [
    { label: 'Bleach', reference: 'Bleach'},
    { label: 'Dye', reference: 'Dye'},
    { label: 'Relaxer', reference: 'Relaxer'},
    { label: 'Perm', reference: 'Perm'},
    { label: 'Not in the last 4 years', reference: 'NotRecent'},
    { label: 'None', reference: 'None'},
  ];
  treatmentHistory!:string;
  gettreatmentHistoryData(output:any) { this.treatmentHistory = output; }

  chemicallyProcessedDurationQuestion = 'How long have you chemically processed your hair?';
  chemicallyProcessedDurationOptions = [
    { label: 'Never', reference: '0'},
    { label: 'I stopped using chemical processes on my hair', reference: 'stopped'},
    { label: '1-6 months', reference: '0.5'},
    { label: '7-12 months', reference: '1'},
    { label: '2 years', reference: '2'},
    { label: '3 years', reference: '3'},
    { label: '4 years or more', reference: '4'},
  ];
  chemicallyProcessed!:string;
  getchemicallyProcessedData(output:any) { this.chemicallyProcessed = output; }

  exerciseFrequencyQuestion = 'How many times a week do you exercise?';
  exerciseFrequencyParams = {
    min: 0,
    max: 7,
    step: 0.5,
  };
  exerciseFrequency!:string;
  getexerciseFrequencyData(output:any) { this.exerciseFrequency = output; }

  shampooFrequencyQuestion = 'How often did you shampoo each week?';
  shampooFrequencyParams = {
    min: 0,
    max: 7,
    step: 0.5,
  };
  shampooFrequency!:string;
  getshampooFrequencyData(output:any) { this.shampooFrequency = output; }

  hotToolsFrequencyQuestion = 'How often do you use hot tools?';
  hotToolsFrequencyOptions = [
    { label:'Never', reference:'Never'},
    { label:'Every Day', reference:'EveryDay'},
    { label:'Every Other Day', reference:'EveryOtherDay'},
    { label:'Once a Week', reference:'OnceaWeek'},
    { label:'Once a Month', reference:'OnceaMonth'},
    { label:'Less than Once a Month', reference:'LessthanOnceaMonth'},
  ];
  hotToolsFrequency!:string;
  gethotToolsFrequencyData(output:any) { this.hotToolsFrequency = output; }

  stylingProductQuestion = 'Do you use any styling products?';
  stylingProductForm = [
    { label: 'Curl Cream', reference: 'CurlCream'},
    { label: 'Hair Serum', reference: 'HairSerum'},
    { label: 'Oils', reference: 'Oils'},
    { label: 'Gels', reference: 'Gels'},
    { label: 'Souffle', reference: 'Souffle'},
    { label: 'Refresh Spray', reference: 'RefreshSpray'},
    { label: 'Hair Grease', reference: 'HairGrease'},
    { label: 'Detanglers', reference: 'Detanglers'},
    { label: 'Heat Protectants', reference: 'HeatProtectants'},
    { label: 'Hair Sprays', reference: 'HairSprays'},
    { label: 'Dry Shampoo', reference: 'DryShampoo'},
    { label: 'Twisting Souffle', reference: 'TwistingSouffle'},
    { label: 'Leave-In Conditioner', reference: 'LeaveInConditioner'},
    { label: 'Styling Puttys', reference: 'StylingPuttys'},
    { label: 'Other', reference: 'Other'},
    { label: 'None', reference: 'None'},
  ];
  stylingProduct!:string;
  getstylingProductData(output:any) { this.stylingProduct = output; }

  stylingProductFrequencyQuestion = 'How often do you use styling products?';
  stylingProductFrequencyParams = {
    min: 0,
    max: 7,
    step: 1,
    unit: 'times per week',
  };
  stylingProductFrequency!:string;
  getstylingProductFrequencyData(output:any) { this.stylingProductFrequency = output; }

  scalpTreatmentQuestion = 'Do you use any in-scalp treatments?';
  scalpTreatmentForm = [
    { label: 'Pre Poo', reference: 'PrePoo'},
    { label: 'Scalp Treatment', reference: 'ScalpTreatment'},
    { label: 'Hair Serum', reference: 'HairSerum'},
    { label: 'No', reference: 'No'},
  ];
  scalpTreatment!:string;
  getscalpTreatmentData(output:any) { this.scalpTreatment = output; }
  // #endregion

  // #region  5) Preferences and Miscellaneous  
  productQuantityQuestion = 'How many products would you like in your hair care routine?';
  productQuantityParams = {
    min: 0,
    max: 8,
    step: 1,
  };
  productQuantity!:string;
  getproductQuantityData(output:any) { this.productQuantity = output; }

  preferencesData!:string;
  getPreferencesData(formData:string) { this.preferencesData = formData; }
  // #endregion

  // #region  6) Final 
  finalForm!:string;
  getFinalFormOutput(output:string) { this.finalForm = output; }
  // #endregion
}
