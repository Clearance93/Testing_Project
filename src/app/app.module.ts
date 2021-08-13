import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GradeEightComponent } from './grade-eight/grade-eight.component';
import { GradeNineComponent } from './grade-nine/grade-nine.component';
import { GradeTenComponent } from './grade-ten/grade-ten.component';
import { GradeElevenComponent } from './grade-eleven/grade-eleven.component';
import { GradeTwelveComponent } from './grade-twelve/grade-twelve.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { NineRegComponent } from './nine-reg/nine-reg.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    GradeEightComponent,
    GradeNineComponent,
    GradeTenComponent,
    GradeElevenComponent,
    GradeTwelveComponent,
    SignupPageComponent,
    NineRegComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
