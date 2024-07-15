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
import { HairTextureQuestionComponent } from '../quiz-components/hair-texture/hair-texture-question/hair-texture-question.component';

// Angular Material Imports
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

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

  submit() {
    // have the functions to submit within each of the regions
    // unified "submit" checks if values are there, then sends them off one after another
    // use rxjs to put delay between each of the calls
  }


  // #region    1) Initial Information 
  name!:string;
  email!:string;
  raceEthnicity!:string;
  // #region    1) Initial Information, Params and Funcitons
  // <tr><app-user-table-form (userTableFormOutput)="GetUserTableData($event)"></app-user-table-form></tr>
  // IO Code example based off of this: https://www.samarpaninfotech.com/blog/methods-to-share-data-between-angular-components/
  GetUserTableData(formData:any){
    this.name = formData.name;
    this.email = formData.email;
  }
  
  // <app-generic-checkbox [question]="raceEthnicityQuestion" [options]="raceEthnicityForm" (output)="getRaceEthnicityData($event)"></app-generic-checkbox></tr>
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
  getRaceEthnicityData(output:any) { this.raceEthnicity = output; }
  // #endregion
  // #endregion

  // #region    2) Pictures 
  middlePartFile!:File;
  backHeadFile!:File;
  rightTempleFile!:File;
  leftTempleFile!:File;
  currentProductsFile!:File;
  // #region    2) Pictures, Params and Functions 
  // <tr> <app-generic-file-submission [question]="middlePartPhotoQuestion" (fileOutput)="middlePartFileListener($event)"></app-generic-file-submission> </tr><hr>
  middlePartPhotoQuestion = 'Please part your hair in the middle of you head and take an image at the top your head showing your scalp';
  middlePartFileListener(file:File) { this.middlePartFile = file; };

  // <tr> <app-generic-file-submission [question]="backHeadPhotoQuestion" (fileOutput)="backHeadFileListener($event)"></app-generic-file-submission> </tr><hr>
  backHeadPhotoQuestion = 'Please take a picture of the back of your head showing all of your hair';
  backHeadFileListener(file:File) { this.backHeadFile = file; };

  // <tr> <app-generic-file-submission [question]="rightTemplePhotoQuestion" (fileOutput)="rightTempleFileListener($event)"></app-generic-file-submission> </tr><hr>
  rightTemplePhotoQuestion = 'Please take a picture of your right temple showing your scalp';
  rightTempleFileListener(file:File) { this.rightTempleFile = file; };

  // <tr> <app-generic-file-submission [question]="leftTemplePhotoQuestion" (fileOutput)="leftTempleFileListener($event)"></app-generic-file-submission> </tr><hr>
  leftTemplePhotoQuestion = 'Please take a picture of your left temple showing your scalp';
  leftTempleFileListener(file:File) { this.leftTempleFile = file; };

  // <tr> <app-generic-file-submission [question]="currentProductsPhotoQuestion" (fileOutput)="currentProductsFileListener($event)"></app-generic-file-submission> </tr><hr>
  currentProductsPhotoQuestion = 'Please take pictures of the product(s) currently in your hair care routine';
  currentProductsFileListener(file:File) { this.currentProductsFile = file; };
  // #endregion
  // #endregion

  // #region    3) Hair/Scalp Profile 
  hairConcerns!:string;
  scalpConcerns!:string;
  hairTexture!:{type:"straightWavy" | "curlyCoily", amplitude:number, period:number, pitch?:number, };
  postWash!:string;
  dryTime!:string;
  humidityEffect!:string;
  // hairThickness?:string;
  // scalpVisibility?:string;  
  // #region    3) Hair/Scalp Profile, Params and Functions 
  // <tr><app-generic-checkbox [question]="hairConcernsQuestion" [options]="hairConcernsForm" (output)="gethairConcernsData($event)"></app-generic-checkbox></tr><hr>
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
  gethairConcernsData(output:any) { this.hairConcerns = output; }

  // <tr><app-generic-checkbox [question]="scalpConcernsQuestion" [options]="scalpConcernsForm" (output)="getscalpConcernsData($event)"></app-generic-checkbox></tr><hr>
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
  getscalpConcernsData(output:any) { this.scalpConcerns = output; }

  // <tr><app-hair-texture-question (result)="getHairTexture($event)"></app-hair-texture-question></tr><hr>
  getHairTexture(output:any) { this.hairConcerns = output; }

  // <tr><app-generic-radiobutton [question]="postWashQuestion" [options]="postWashOptions" (output)="getpostWashData($event)"></app-generic-radiobutton></tr><hr>
  postWashQuestion = 'What do you typically do after washing your hair?';
  postWashOptions = [
    { label: 'Heat Style Daily', reference: 'daily'},
    { label: 'Heat Style Occasionally', reference: 'occasionally'},
    { label: 'Air Dry', reference: 'never'},
  ];
  getpostWashData(output:any) { this.postWash = output; }

  // <tr><app-generic-thumb-label-slider [question]="dryTimeQuestion" [min]="dryTimeParam.min" [max]="dryTimeParam.max" [step]="dryTimeParam.step" [unit]="dryTimeParam.unit" (output)="getdryTimeData($event)"></app-generic-thumb-label-slider><hr>
  dryTimeQuestion = 'How long does it take to dry your hair?'
  dryTimeParam = {
    min: 0,
    max: 4,
    step: 0.5,
    unit: 'hr',
  };
  getdryTimeData(output:any) { this.dryTime = output; }

  // <tr><app-generic-checkbox [question]="humidityEffectQuestion" [options]="humidityEffectForm" (output)="gethumidityEffectData($event)"></app-generic-checkbox></tr><hr>
  humidityEffectQuestion = 'What is your hair like when it is humid outside?';
  humidityEffectForm = [
    { label: 'Frizzy', reference: 'Frizzy'},
    { label: 'Dry', reference: 'Dry'},
    { label: 'Dull', reference: 'Dull'},
    { label: 'Lifeless', reference: 'Lifeless'},
    { label: 'Tangled', reference: 'Tangled'},
    { label: 'No Change', reference: 'NoChange'},
  ];
  gethumidityEffectData(output:any) { this.humidityEffect = output; }

  // <tr><strong>scalp visibility placeholder</strong></tr><hr>
  scalpVisibility?:string;
  // TODO: NOT IMPLEMENTED YET
  // <tr><strong>hair thickness placeholder</strong></tr><hr>
  hairThickness?:string;
  // TODO: NOT IMPLEMENTED YET
  // #endregion
  // #endregion

  // #region    4) Treatment/Lifestyle Profile 
  treatmentHistory!:string;
  chemicallyProcessed!:string;
  exerciseFrequency!:string;
  shampooFrequency!:string;
  hotToolsFrequency!:string;
  stylingProduct!:string;
  stylingProductFrequency!:string;
  scalpTreatment!:string;
  // #region    4) Treatment/Lifestyle Profile, Params and Functions 
  // <tr><app-generic-checkbox [question]="treatmentHistoryQuestion" [options]="treatmentHistoryForm" (output)="gettreatmentHistoryData($event)"></app-generic-checkbox></tr><hr>
  treatmentHistoryQuestion = 'Has your hair gone through any of the following processes?';
  treatmentHistoryForm = [
    { label: 'Bleach', reference: 'Bleach'},
    { label: 'Dye', reference: 'Dye'},
    { label: 'Relaxer', reference: 'Relaxer'},
    { label: 'Perm', reference: 'Perm'},
    { label: 'Not in the last 4 years', reference: 'NotRecent'},
    { label: 'None', reference: 'None'},
  ];
  gettreatmentHistoryData(output:any) { this.treatmentHistory = output; }

  // <tr><app-generic-radiobutton [question]="chemicallyProcessedDurationQuestion" [options]="chemicallyProcessedDurationOptions" (output)="getchemicallyProcessedData($event)"></app-generic-radiobutton></tr><hr>
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
  getchemicallyProcessedData(output:any) { this.chemicallyProcessed = output; }

  // <tr><app-generic-thumb-label-slider [question]="exerciseFrequencyQuestion" [min]="exerciseFrequencyParams.min" [max]="exerciseFrequencyParams.max" [step]="exerciseFrequencyParams.step" (output)="getexerciseFrequencyData($event)"></app-generic-thumb-label-slider><hr>
  exerciseFrequencyQuestion = 'How many times a week do you exercise?';
  exerciseFrequencyParams = {
    min: 0,
    max: 7,
    step: 0.5,
  };
  getexerciseFrequencyData(output:any) { this.exerciseFrequency = output; }

  // <tr><app-generic-thumb-label-slider [question]="shampooFrequencyQuestion" [min]="shampooFrequencyParams.min" [max]="shampooFrequencyParams.max" [step]="shampooFrequencyParams.step" (output)="getshampooFrequencyData($event)"></app-generic-thumb-label-slider><hr>
  shampooFrequencyQuestion = 'How often did you shampoo each week?';
  shampooFrequencyParams = {
    min: 0,
    max: 7,
    step: 0.5,
  };
  getshampooFrequencyData(output:any) { this.shampooFrequency = output; }

  // <tr><app-generic-radiobutton [question]="hotToolsFrequencyQuestion" [options]="hotToolsFrequencyOptions" (output)="gethotToolsFrequencyData($event)"></app-generic-radiobutton></tr><hr>
  hotToolsFrequencyQuestion = 'How often do you use hot tools?';
  hotToolsFrequencyOptions = [
    { label:'Never', reference:'Never'},
    { label:'Every Day', reference:'EveryDay'},
    { label:'Every Other Day', reference:'EveryOtherDay'},
    { label:'Once a Week', reference:'OnceaWeek'},
    { label:'Once a Month', reference:'OnceaMonth'},
    { label:'Less than Once a Month', reference:'LessthanOnceaMonth'},
  ];
  gethotToolsFrequencyData(output:any) { this.hotToolsFrequency = output; }

  // <tr><app-generic-checkbox [question]="stylingProductQuestion" [options]="stylingProductForm" (output)="getstylingProductData($event)"></app-generic-checkbox></tr><hr>
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
  getstylingProductData(output:any) { this.stylingProduct = output; }

  // <tr><app-generic-thumb-label-slider [question]="stylingProductFrequencyQuestion" [min]="stylingProductFrequencyParams.min" [max]="stylingProductFrequencyParams.max" [step]="stylingProductFrequencyParams.step" [unit]="stylingProductFrequencyParams.unit" (output)="getstylingProductFrequencyData($event)"></app-generic-thumb-label-slider><hr>
  stylingProductFrequencyQuestion = 'How often do you use styling products?';
  stylingProductFrequencyParams = {
    min: 0,
    max: 7,
    step: 1,
    unit: 'times per week',
  };
  getstylingProductFrequencyData(output:any) { this.stylingProductFrequency = output; }

  // <tr><app-generic-checkbox [question]="scalpTreatmentQuestion" [options]="scalpTreatmentForm" (output)="getscalpTreatmentData($event)"></app-generic-checkbox></tr><hr>
  scalpTreatmentQuestion = 'Do you use any in-scalp treatments?';
  scalpTreatmentForm = [
    { label: 'Pre Poo', reference: 'PrePoo'},
    { label: 'Scalp Treatment', reference: 'ScalpTreatment'},
    { label: 'Hair Serum', reference: 'HairSerum'},
    { label: 'No', reference: 'No'},
  ];
  getscalpTreatmentData(output:any) { this.scalpTreatment = output; }
  // #endregion
  // #endregion

  // #region    5) Preferences and Miscellaneous 
  productQuantity!:string;
  preferencesData!:string;
  // #region    5) Preferences and Miscellaneous, Params and Functions 
  // <tr><app-generic-thumb-label-slider [question]="productQuantityQuestion" [min]="productQuantityParams.min" [max]="productQuantityParams.max" [step]="productQuantityParams.step" (output)="getproductQuantityData($event)"></app-generic-thumb-label-slider></tr><hr>
  productQuantityQuestion = 'How many products would you like in your hair care routine?';
  productQuantityParams = {
    min: 0,
    max: 8,
    step: 1,
  };
  getproductQuantityData(output:any) { this.productQuantity = output; }

  // <tr><app-preferences-form (preferencesFormOutput)="GetUserTableData($event)"></app-preferences-form></tr>
  getPreferencesData(formData:string) { this.preferencesData = formData; }
  // #endregion
  // #endregion
  
  // #region    6) Final 
  finalForm!:string;
  // #region    6) Final, Params and Functions  
  getFinalFormOutput(output:string) { this.finalForm = output; }
  // #endregion
  // #endregion
}
