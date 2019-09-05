import { Component, OnInit } from '@angular/core';
import { format } from 'url';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  public signUpForm={
    name:'',
    lastName:'',
    mobile:'',
    email:'',
    country:'',
    language:'',
  }
  public isValidFormSubmitted:boolean=false

  constructor() { }

  ngOnInit() {
  }
  login(form:NgForm) {
    if(form.valid) {
    console.log(this.signUpForm)
    }

  }

}
