import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyModule } from "survey-angular-ui";

@NgModule({
declarations: [
  AppComponent
],
imports: [
  BrowserModule, 
  HttpClientModule,
  AppRoutingModule,
  SurveyModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



