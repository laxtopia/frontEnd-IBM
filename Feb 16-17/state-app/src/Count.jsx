import React , {useState} from 'react'

const Count = () => {

    const [count , setCount] = useState(2);
    const handleClick = () => {
      setCount(count+1) ;
      // count+=1;
      console.log(count);
    }
  
    return (
      <>
        <h1> {count} </h1>
        <button onClick={handleClick} > Click Me  </button>
      </>
    )
  }

export default Count