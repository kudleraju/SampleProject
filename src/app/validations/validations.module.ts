import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactivefomsComponent } from './reactivefoms/reactivefoms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const router:Routes=[
  { path:'',redirectTo:'reactive'}, 
  { path:'reactive',component:ReactivefomsComponent},
  { path:'template',component:TemplatedrivenComponent}
]




@NgModule({
  declarations: [ReactivefomsComponent, TemplatedrivenComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ValidationsModule { }
