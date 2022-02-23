import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {
  url :string = "https://jsonplaceholder.typicode.com/users";
  constructor( private http: HttpClient  ) { }
  getComments(){
    // return this.http.post("https://jsonplaceholder.typicode.com/posts" , "hello" );
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  getData(  ){
    console.log(this.http.get("https://jsonplaceholder.typicode.com/users"));
  }
}
