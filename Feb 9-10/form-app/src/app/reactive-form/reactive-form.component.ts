import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  myGroup!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myGroup = new FormGroup({
      'fName' : new FormControl("" , [Validators.required , Validators.minLength(3)]  ),
      'lName' : new FormControl(null , Validators.required),
      'age' : new FormControl(null , Validators.min(18)    ),
      'address' : new FormGroup({
        'street' : new FormControl(null  ) ,
        'state' : new FormControl(null),
        'pinCode' : new FormControl(null),
      }) , 

    });
  }


  onSubmit(){
    console.log(this.myGroup.value);
  } 

  get f(): any {
    return this.myGroup.get('fName');
  }

}
