import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(service: ProvideDataService) { 

    this.getGreet = service.greet();
    this.arr = service.myArr;
  }

  ngOnInit(): void {
  }
  getGreet : any ;
  arr:any

}
