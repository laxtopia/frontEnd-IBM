import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Tweets from './components/Twitter/Tweets'

const App = () => {
  // const [info, setinfo] = useState([]);
  // const fetchData = () => fetch("https://jsonplaceholder.typicode.com/users").then( res=>res.json() ).then( res => {setinfo(res)} )  ;
  // useEffect( ()=>{
  //   fetchData()
  // } , [] )
  // console.log(info);



  const [info, setInfo] = useState({ 
    name:"",
    email:"",
    pass:"",
   });

  const [disp, setDisp] = useState({
    name:"",
    email:"",
    pass:"",
  });

  const handleClick = (event) => {
    event.preventDefault(); // prevents reloading the DOM 
    console.log(info);  
    setDisp({name :info.name, email : info.email , pass : info.pass  });

  }

  const handleChangeName = (event) => {
    console.log(event.target.value);  
    setInfo( {   ...info , name :   event.target.value} );
  }

  
  const handleChangeEmail = (event) => {
    console.log(event.target.value);  
    setInfo( {   ...info , email :   event.target.value} );
  }
   
  const handleChangePass = (event) => {
    console.log(event.target.value);  
    setInfo( {   ...info , pass :   event.target.value} );
  }

  return (
    <>
      
      {/* <h1>Beverages</h1>
      <Navbar firstBev = {"Coffee"}  secondBev = {"tea"}   /> */}
      {/* <h1>Snacks</h1>
      <Navbar/> */}

      {/* <Card title = "Today's Money" num = "$53,000" logo = "Logo one " />
      <Card title = "Today's Users "  num = "5,300"  logo = "Logo two " />
      <Card  title = "New Clients "  num = "+3,462"  logo = "Logo three "  /> */}


      {/* <Tweets/> */}

      {/* {info.map( el => el.name )} */}

      <form action="">
        <label htmlFor="">Enter Name</label>
        <input type="text"  placeholder='Enter Name'  onChange={handleChangeName} value = {info.name} />
      <br />
        <label htmlFor=""> Email  </label>
        <input type="email"  placeholder='Enter Email '  onChange={handleChangeEmail} value = {info.email} />
<br />
        <label htmlFor=""> Password  </label>
        <input type="password"  placeholder='Enter Password'  onChange={handleChangePass} value = {info.pass} />
      <br />  
        <button onClick={handleClick} > Submit  </button>
        <h1> {disp.name} </h1>
        <h1> {disp.email} </h1>
        <h1> {disp.pass} </h1>
      </form>
      

      

    </>
  )
}

export default App