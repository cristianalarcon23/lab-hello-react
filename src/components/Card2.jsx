import React from 'react';
import icon2 from '../images/icon2.png'

export default function Card2() {
  return (
    <div className='card'>
        <img src={icon2} alt="icon2" />
        <h5>Components</h5>
        <p>Build encapsulated components that manage their state</p>
    </div>
  )
}