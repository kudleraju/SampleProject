import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Routes,RouterModule } from '@angular/router';

const route1 : Routes =[
  { path:'',redirectTo:'home'}, 
  {path:'home1',component:Home1Component},
  {path:'home2',component:Home2Component}
]


@NgModule({
  declarations: [
    Home1Component, 
    Home2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(route1)
   
  ]
})
export class HomeModule { }
