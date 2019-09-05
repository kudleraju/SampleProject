import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';
import { StringinterpolationComponent } from './child2/stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './child2/propertybinding/propertybinding.component';
import { EventbindingComponent } from './child2/eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './child2/twowaybinding/twowaybinding.component';

const route : Routes =[
  { path:'',redirectTo:'child1'}, 
  {path: 'child1',component:Child1Component},
  {path: 'child2',component:Child2Component},
  {path: 'child3',component:Child3Component},
  {path: 'child4',component:Child4Component},
]



@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    StringinterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    TwowaybindingComponent 
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route)
  ]
})
export class ChildModule { 

}
