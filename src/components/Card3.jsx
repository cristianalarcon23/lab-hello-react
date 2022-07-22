import React from 'react';
import icon3 from '../images/icon3.png'

export default function Card3() {
  return (
    <div className='card'>
        <img src={icon3} alt="icon3" />
        <h5>Single-way</h5>
        <p>A set of inmutable values are passed to the components</p>
    </div>
  )
}