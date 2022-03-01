import React from 'react'
import { useState } from 'react';

const Twitter = (props) => {
    // console.log(props.handleLike);
    const [count , setCount ] = useState(props.objects.likes);
    // const handleButton = (gg) => {
    //     if( gg == 1 )
    //         setCount(count+1);
    //     else 
    //         setCount(count-1);
    // }

    // console.log(count);

  return (
    <div>
    <div className='section-one'>
        <div className="mainName"> <h1> {props.objects.name }  </h1></div>
        <div className="twitterHandle"><h6>  {props.objects.handle}  </h6></div>

    </div>
    <div className="content"> {props.objects.tweet} </div>
    <div className="action-like">
        <button  onClick= { () => props.handleLike(props.objects.id) } > +   </button>
        <button  onClick= {  () => props.handleDislike(props.objects.id)    } > -   </button>
   
    </div>
    {/* <p>{count}</p> */}
    <p>{props.objects.likes}</p>
    <input type="text" />


    </div>
  
  );
}

export default Twitter