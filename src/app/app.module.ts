import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DemoHeadingComponent } from './demo-heading/demo-heading.component';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ChildComponent } from './child/child.component';
import { ValidationsComponent } from './validations/validations.component';
import { ReactiveExComponent } from './reactive-ex/reactive-ex.component';
import { DemotaskComponent } from './demotask/demotask.component';
import { DynamicreactiveComponent } from './dynamicreactive/dynamicreactive.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { TablereactiveComponent } from './tablereactive/tablereactive.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NestedformComponent } from './nestedform/nestedform.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { StepperComponent } from './stepper/stepper.component';
import { ClockComponent } from './clock/clock.component';
import {MatStepperModule} from '@angular/material/stepper';



const router: Routes =[
  {path:'mtwlabs',component:DemoHeadingComponent},
  {path:'home' ,component:HomeComponent},
  {path:'child',loadChildren:'./child/child.module#ChildModule'},
  {path:'home',loadChildren:'./home/home.module#HomeModule'},
  {path:'validations',loadChildren:'./validations/validations.module#ValidationsModule'}, 
  {path:'aboutme',loadChildren:'./aboutme/aboutme.module#AboutmeModule'},
  {path:'rtable',component:TablereactiveComponent},
  {path:'httpemp',component:CreateemployeeComponent},
  {path:'nestedform',component:NestedformComponent},
  {path:'clock',component:ClockComponent},  
]

@NgModule({
  declarations: [
    AppComponent,
    DemoHeadingComponent,
    HomeComponent,
    NavbarComponent,
    ChildComponent,
    HomeComponent,
    ValidationsComponent,
    ReactiveExComponent,
    DemotaskComponent,
    DynamicreactiveComponent,
    AboutmeComponent,
    TablereactiveComponent,
    CreateemployeeComponent,
    NestedformComponent,
    StepperComponent,
    ClockComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatStepperModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
