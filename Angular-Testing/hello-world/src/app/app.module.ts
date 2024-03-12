import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'        // added for use of special directives

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormTemplateComponent } from './test-form-template/test-form-template.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    // added ReactiveFormsModule for the special directives found here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
