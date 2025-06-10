import React from 'react'
import  './header.css'

const Header = ( {setShowForm} ) => {
  return (
    <header>
      <div className="brand">Cylvenda Technologies</div>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
      <div onClick={()=> setShowForm(true) } className="button">Login</div>
    </header>
  )
}

export default Header
