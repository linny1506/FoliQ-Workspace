import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'        // added for use of special directives
import {MatExpansionModule} from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestFormTemplateComponent } from './test-form-template/test-form-template.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ExpansionExpandCollapseAllExampleComponent } from './expansion-expand-collapse-all-example/expansion-expand-collapse-all-example.component';

@NgModule({
  declarations: [
    AppComponent,
    TestFormTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    // added ReactiveFormsModule for the special directives found here
    MatExpansionModule,     // for the expanding box thing
    ExpansionExpandCollapseAllExampleComponent,
  ],
  providers: [
    provideAnimationsAsync('noop')
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
