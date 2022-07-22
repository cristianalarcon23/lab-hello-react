import React from 'react'
import logo from '../images/logo.png'
import menu from '../images/menu.png'

export default function Heading() {
  return (
    <div className='heading'>

        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='menu'>
            <img src={menu} alt="menu" />
        </div>
        
        <div className='description-text'>
            <h1>Say Hello to </h1>
            <h1>ReactJS</h1>
            <p>You will learn how to use</p>
            <p>the most popular frontend library,</p>
            <p>and become a super Ninja Developer.</p>
        </div>

        <button className='button'>Awesome!</button>

    </div>
  )
}
