import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: ' <div *ngFor = " let item of users "   > <h1> Hello </h1>  </div>  ',   // directly working on HTML instead of (templateUrl: './todo.component.html' )
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  users = ["hello" , "hello" ] ;
  inputArr:any = [];
  inputTask:string ="";
  constructor() { }

  ngOnInit(): void {
  }

  addTask(){
    console.log(this.inputTask);
    this.inputArr.push(this.inputTask);
  }

  delTask(item:any){
    console.log(item);
    const num = this.inputArr.findIndex( (elem: any) => elem == item ); 
    this.inputArr.splice(  num  , 1 );
  }

}


// templateUrl: './todo.component.html',

