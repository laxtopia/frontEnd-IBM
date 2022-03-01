import React , { useState} from 'react'

const Count2 = () => {

    const [count , setCount] = useState({
        count1:0,
        count2:1
    });

    console.log(count);
    const handleClick = () => {
      setCount( { ...count ,  count1: count.count1 +1 } ) ;
      // count+=1;
      console.log(count);
    }

    const handleClickTwo = () => {
        setCount( { ...count, count2:count.count2 +1 } ) ;
        // count+=1;
        console.log(count);
      }
  
    return (
      <>
        <h1> {count.count1} </h1>
        <button onClick={handleClick} > Click Me  </button>
        <h2>  {count.count2} </h2>
        <button onClick={handleClickTwo} > Click MeTwo </button>
      </>
    )
  }

export default Count2