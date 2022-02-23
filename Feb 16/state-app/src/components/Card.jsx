import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='container'>
        <div className='one'>
            <h5> {props.title} </h5>
            <h4> {props.num} </h4>
        </div>
        <div className='two'>  {props.logo}  </div>
    </div>
  )
}

export default Card