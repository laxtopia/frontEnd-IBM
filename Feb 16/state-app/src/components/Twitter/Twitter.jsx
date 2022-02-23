import React from 'react'
import { useState } from 'react';

const Twitter = (props) => {
    console.log(props);
    const [count , setCount ] = useState(0);
    const handleButton = (gg) => {
        if( gg == 1 )
            setCount(count+1);
        else 
            setCount(count-1);

    }

  return (
    <div>
    <div className='section-one'>
        <div className="mainName"> <h1> {props.objects.name }  </h1></div>
        <div className="twitterHandle"><h6>  {props.objects.handle}  </h6></div>

    </div>
    <div className="content"> {props.objects.tweet} </div>
    <div className="action-like">
        <button  onClick= { () => handleButton(1) } > +   </button>
        <button  onClick= { () => handleButton(2) } > -   </button>
   
    </div>
    <p>{props.objects.likes}</p>

    </div>
  
  );
}

export default Twitter