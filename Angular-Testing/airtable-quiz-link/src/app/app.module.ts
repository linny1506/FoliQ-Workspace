import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizComponent } from './test-components/quiz/quiz.component';
import { CoinTallyComponent } from './test-components/coin-tally/coin-tally.component';
import { CoinInputFormComponent } from './test-components/coin-input-form/coin-input-form.component';
import { UserQuizComponent } from './test-components/user-quiz/user-quiz.component';
import { QuizFrameComponent } from './components/quiz-sample/quiz-frame/quiz-frame.component';
import { QuizQuestionTextfieldComponent } from './components/quiz-sample/quiz-question-textfield/quiz-question-textfield.component';
import { QuizQuestionFileComponent } from './components/quiz-sample/quiz-question-file/quiz-question-file.component';
import { QuizQuestionMultipleChoiceComponent } from './components/quiz-sample/quiz-question-multiple-choice/quiz-question-multiple-choice.component';
import { QuizQuestionSliderComponent } from './components/quiz-sample/quiz-question-slider/quiz-question-slider.component';


// stuff for angular materials slider
import {MatNativeDateModule} from '@angular/material/core';
import {provideHttpClient} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CoinTallyComponent,
    CoinInputFormComponent,
    UserQuizComponent,
    QuizFrameComponent,
    QuizQuestionTextfieldComponent,
    QuizQuestionFileComponent,
    QuizQuestionMultipleChoiceComponent,
    QuizQuestionSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(MatNativeDateModule),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
