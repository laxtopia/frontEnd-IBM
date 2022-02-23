import React from 'react'
import Navbar from './components/navbar'
import './App.css'

const App = () => {

  const handleClick = () =>{
    console.log("hello");
  }
  return (
  <>
  <button onClick={handleClick}  > Clickme    </button>
  {/* <button onClick={handleClick()}  > Clickme    </button>   // doesnt work  */}
  </>
    
  );
}

export default App


