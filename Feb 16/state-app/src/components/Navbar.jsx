import React from 'react'

const Navbar = (props) => {
    console.log(props);
  return (

    <>
    <ul>
        <li> {props.firstBev} </li>
        <li>{props.secondBev} </li>
        <li>Banana </li>
    </ul>
    
    </>
  )
}

export default Navbar