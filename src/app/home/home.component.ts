import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormArray } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showContent :boolean=true
  // title = "Data binding using String Interpolation";  
  // numberA: number = 10;  
  // numberB: number = 20; 

  // title = "Data binding using Property Binding";    
  // imgUrl="https://avatars2.githubusercontent.com/u/20270535?s=40&v=4";  
  fullName: string = "Rahul"; 
  public newdate = new Date();
  public newcurrancy  =  80;
  public newDecimal =77.123456789;
  public newtitlecase = "hello world good morning";
  public newPercentage = 0.2;

   
 
  constructor() { }

  ngOnInit() {

  }
 hideContents(){
    this.showContent=!this.showContent
  }
}
 
  
 