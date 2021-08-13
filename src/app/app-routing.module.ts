import { SignupPageComponent } from './signup-page/signup-page.component';
import { GradeTwelveComponent } from './grade-twelve/grade-twelve.component';
import { GradeTenComponent } from './grade-ten/grade-ten.component';
import { GradeNineComponent } from './grade-nine/grade-nine.component';
import { GradeEightComponent } from './grade-eight/grade-eight.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradeElevenComponent } from './grade-eleven/grade-eleven.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'grade-eight', component: GradeEightComponent},
  { path: 'grade-nine', component: GradeNineComponent},
  { path: 'grade-ten', component: GradeTenComponent},
  { path: 'grade-eleven', component: GradeElevenComponent},
  { path: 'grade-twelve', component: GradeTwelveComponent},
  { path: 'signup-page', component: SignupPageComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
