import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizComponent } from './test-components/quiz/quiz.component';
import { CoinTallyComponent } from './test-components/coin-tally/coin-tally.component';
import { CoinInputFormComponent } from './test-components/coin-input-form/coin-input-form.component';
import { UserQuizComponent } from './test-components/user-quiz/user-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    CoinTallyComponent,
    CoinInputFormComponent,
    UserQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
