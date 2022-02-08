import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  name = 'James';
  greet(){
    return this.name;
  }
  getName(){
    alert("hello");
  }
  count = 0 ;

  subtract(){
    this.count-= 1;
  }
  add(){
    this.count += 1;
  }
}
