import React from 'react'
import { useState } from 'react'

const Counter = () => {

 const [count , setCount] = useState(0);

//  const Increment = ()=>{
//      setCount(count+1);
//  }
//  const Decrement = ()=>{
//     setCount(count-1);
// }


const handleClick = ( val ) =>{
    if(val == 1){
        setCount(count+1);
        console.log(count);
    }
    else{
        setCount(count-1)
        console.log(count);
    }
}
  return (
    <>
        <button onClick={ () => handleClick(1)} > + </button>
        <h2>{count}</h2>
        <button onClick={  () => handleClick(2)  } > - </button>

    
    </>
  )
}

export default Counter