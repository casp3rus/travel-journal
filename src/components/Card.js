import React from 'react'
import pin from '../images/drop-pin.png'

export const Card = (props) => {
  return (
    <div>
      <div className='card'>
        <img src={props.image} alt='' className='card--image' />
        <div className='card--content'>
          <div>
            <img src={pin} alt='' className='card--pin'/>
            <span className='card--location'>{props.location}</span>
            <a href={props.mapLocation} className='card--map-link'>Google Maps Location</a>
          </div>
          <h1 className='card--title'>{props.title}</h1>
          <h3 className='card--timeline'>{`${props.duration.start} - ${props.duration.end}`}</h3>
          <p>{props.text}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}