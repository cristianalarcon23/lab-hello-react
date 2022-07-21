import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'

export default function Heading() {
  return (
    <div className='heading'>
        <img src={logo} alt="logo" />
        <img src={menu} alt="menu" />
        <h1>Say Hello to ReactJS</h1>
    </div>
  )
}
