import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test',
  template: ' <h1> Hello </h1> ' ,
  styleUrls: ['./input-test.component.css']
})
export class InputTestComponent implements OnInit {
  @Input() users: any;

  constructor() { }

  ngOnInit(): void {
  }

}
