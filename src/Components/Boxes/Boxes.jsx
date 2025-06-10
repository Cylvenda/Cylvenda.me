import React, { useEffect } from 'react'
import './Boxes.css'
import { assets } from '../../assets/assets'


const Boxes = () => {

  const boxContent = [
    {
      id: 1,
      image: assets.computer,
      head: "Website Development",
      paragraph: "We develope Websites and Web Apllications For every clients needs and demands."
    },
    {
      id: 2,
      image: assets.apps,
      head: "Mobile Apps Development",
      paragraph: "We developes and transform web applications to mobile apps according to clients needs."
    },
    {
      id: 3,
      image: assets.hardware,
      head: "Computer Maintanance",
      paragraph: "We also comminicate with computer hardware in order to solve any problem that client faced.."
    },
    {
      id: 4,
      image: assets.it,
      head: "IT Solutions",
      paragraph: "We also have the desk that handles all problems that needs an IT experts to solve it."
    },
  ]

  return (
    <>
      <div  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="box-container">
        {boxContent.map((content, id) => (
          <div data-aos="flip-right" data-aos-duration="1500" key={id} className="box">
            <img src={content.image}  />
            <h3>{content.head}</h3>
            <p>{content.paragraph}</p>
            <div className="button-container">
              <button>Get into Touch</button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Boxes
