import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {

    this.myGroup = new FormGroup({
      'fName' : new FormControl("" , [Validators.required]  ),
      'lName' : new FormControl(null , Validators.required),
      'mail' : new FormControl(null , [Validators.required , Validators.email]    ),
      'pass' : new FormControl(null , [Validators.required ]    ),
  

    });
  }

  onSubmit(){
    console.log(this.myGroup.value);
  } 

  get fnamefunc(): any {
    return this.myGroup.get('fName');
  }
  get lnamefunc(): any {
    return this.myGroup.get('lName');
  }
  get mailfunc(): any {
    return this.myGroup.get('mail');
  }
  get passfunc(): any {
    return this.myGroup.get('pass');
  }

}
