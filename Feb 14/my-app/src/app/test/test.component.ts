import { Component, OnInit } from '@angular/core';
import { ProvideDataService } from '../provide-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  data: any ;
  constructor(  service: ProvideDataService ) { 
     service.getComments().subscribe( (info) => {
       this.data = info;
       
     }  );


     console.log(this.data);
  }
  ngOnInit(): void {    
  }

}
