// import React , {Component} from 'react';
// import ReactDOM from 'react-dom';

// class Greet extends React.Component{
//   render(){
//     return (
//       <h1> Hello World  </h1>
//     );
//   }
// }

// ReactDOM.render( <Greet name ="lax" /> , document.getElementById('root') );

import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

const Element = ()=>{   
  // const fName = "Laxman" ;
  // const count = 4 ;
  // const arr = [1,2,3,4,5] ;


  // const nameFunc = () =>{
  //   return "Mayank"
  // }
  return (

    // <>
    //   <h1  className=  { count <5 ? "text-primary" : "text-warning"  } >hello , { count <5 ? "Tom" : "Jerry" }</h1>
    //   <h2>Hi</h2>
    // </>
 
    //   <>
    //   <h1  className=   {` text-primary  ${ count <5 ? 'text-danger':'text-warning'}    ` }  >hello , { count <5 ? "Tom" : "Jerry" }</h1>
    //   <h2>Hi</h2>
    // </>

    // arr.map( (a)=> <h1>  {a} </h1> )

    <>
      <App/>
    </>

  );
}

ReactDOM.render( <Element/> , document.getElementById('root') );


// function index() {
//   return (
//     <div>index</div>
//   )
// }

// export default index