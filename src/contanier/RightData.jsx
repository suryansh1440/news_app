import React from 'react'
import './RightData.css'

const RightData = (props) => {
  return (
    <div className='rightContanier'>
      <div id="rightInner1">
        <div id="rightTitle">
          {props.data.articles[props.contentIndex].title}
        </div>
        <div id="rightImg">
          <img src={props.data.articles[props.contentIndex].image} alt="" loading="lazy" />
        </div>
      </div>
      <div id="rightInner2">
        <p>{props.data.articles[props.contentIndex].description}</p>
        <h3>Author- {props.data.articles[props.contentIndex].source.name}</h3>
        <h5>Link to Article- <a href={props.data.articles[props.contentIndex].url} target="_blank">{props.data.articles[props.contentIndex].url}</a></h5>
      </div>
    </div>
  )
}

export default RightData
