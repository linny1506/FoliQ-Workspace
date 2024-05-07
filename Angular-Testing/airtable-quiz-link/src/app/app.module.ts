import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { QuizComponent } from './quiz/quiz.component';
import { CoinTallyComponent } from './coin-tally/coin-tally.component';
import { CoinInputFormComponent } from './coin-input-form/coin-input-form.component';
import { UserQuizComponent } from './user-quiz/user-quiz.component';

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
