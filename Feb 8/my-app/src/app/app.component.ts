import { Component } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'my-app';
  // name = 'James';
  // greet(){
  //   return this.name;
  // }
  // getName(){
  //   alert("hello");
  // }
  // count = 0 ;

  // subtract(){
  //   this.count-= 1;
  // }
  // add(){
  //   this.count += 1;
  // }

  // boolVal = false;
  // editable(){
  //   if(this.boolVal == true)
  //     this.boolVal = false;
  //   else
  //     this.boolVal = true;
  // }


  disable = false ;
  classCheck = "one";
  numbers = [1,2,3,4,5];

  show = true;
  gg = 5;


  color = "blue" ;



}
