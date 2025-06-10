import React from 'react'
import './Head.css'

const Head = () => {
  return (
    <div className="container-head"  data-aos="fade-right" data-aos-duration="1500">
      <div className="head-content">
        <h3 data-aos="zoom-in-down" data-aos-duration="1500">Cylvenda Technologies</h3>
        <p data-aos="zoom-in-down" data-aos-duration="1500">Welcome to Cylvenda Technologies to get and be helpfull From 
          Our different services which we offered. we Provide different solutions to The Problems which related to IT and 
          other more related problems. Cylvenda Technologies Solution to every problems you have faced.
        </p>
      </div>
      <div data-aos="zoom-in-down" data-aos-duration="1500" className="button-container">
      <button  type="button">Read More</button>
      </div> 
    </div>
  )
}

export default Head
