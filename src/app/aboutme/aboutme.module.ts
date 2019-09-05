import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume/resume.component';

const router:Routes=[
  { path:'',redirectTo:'personaldetails'}, 
  { path:'personaldetails',component:PersonaldetailsComponent},
  { path:'profile',component:ProfileComponent},
  { path:'resume',component:ResumeComponent},
]

@NgModule({
  declarations: [
    ProfileComponent,
    ResumeComponent,
    PersonaldetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
  ]
})
export class AboutmeModule { }
