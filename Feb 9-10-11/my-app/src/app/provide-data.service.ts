import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideDataService {

  constructor() { }

  greet(){
    return "hello" ;
  }

  myArr = [  {
    company : "Hello" ,
    contact : " bandi " ,
    country : " india " ,

  } ,
  {  company : "Hello" ,
  contact : " bandi " ,
  country : " india " ,
  } 
  , 
  {   company : "Hello" ,
  contact : " bandi " ,
  country : " india " ,
  } ] ;


}
