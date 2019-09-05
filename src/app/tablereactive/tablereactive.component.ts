import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms'; 

@Component({
  selector: 'app-tablereactive',
  templateUrl: './tablereactive.component.html',
  styleUrls: ['./tablereactive.component.css']
})
// export class TablereactiveComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

export class TablereactiveComponent implements OnInit {

  public isValid:boolean = false;
  nestedForm:FormGroup;
  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.nestedForm=this._fb.group({
    userName:['', Validators.required,Validators.minLength(2),Validators.maxLength(10)],
    email:['',Validators.required,Validators.pattern("^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$")],
    address: this._fb.array([this.addAddressGroup()])
  });
}

addAddressGroup(){
  return this._fb.group({
    plotno:[],
    Residency:[],
    locality:[],
    Landmark:[],
    pincode:[],
  })
}

addAddress(){
  (<FormArray>this.nestedForm.get('address')).push(this.addAddressGroup());
  console.log(this.nestedForm.controls.address.value)
}

removeAddress(index){
  (<FormArray>this.nestedForm.get('address')).removeAt(index);
  console.log(this.nestedForm.controls.address.value)

}
submitted(){
  console.log(this.nestedForm.value)
}
// }
// get addressArray(){
// return<FormArray>this.nestedForm.get("address")
// }
}
