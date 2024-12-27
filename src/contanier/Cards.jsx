import React from 'react'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className='cardContanier' value={props.value} onClick={(e) => {props.setContentIndex(props.value)}}>
      <p>{props.text.length>120?`${props.text.slice(0, 120)}...`:props.text}</p>
    </div>
  )
}

export default Cards
