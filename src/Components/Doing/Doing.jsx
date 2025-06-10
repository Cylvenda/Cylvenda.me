import React from 'react'
import './Doing.css'

const Doing = () => {

    const steps = [
        {
            id: 1,
            content: "Website Design and development"
        },
        {
            id: 2,
            content: "Mobile Application Development "
        },
        {
            id: 3,
            content: "Software Installation"
        },
        {
            id: 4,
            content: "Computer Mintanance"
        },
        {
            id: 5,
            content: "CCTV Camera Installation and management"
        },
        {
            id: 6,
            content: "And any othermore IT assistance."
        },
    ]

    return (
        <section data-aos="fade-up" data-aos-duration="1500" className='doing-container'>
            <h3>LIST OF SERVICES THAT YOU CAN GET FROM US CYLVENDA TECHNOLOGIES</h3>
            <div className="container-doing">
                {steps.map((stepsToBeTaken, id) => (
                    <div data-aos="flip-left" data-aos-duration="2000"
                        className='doing-content' key={id}>0{stepsToBeTaken.id}. {stepsToBeTaken.content}</div>
                ))}
            </div>
            <div data-aos="flip-left" data-aos-duration="2000" className="button-container">
                <button>Click To Start</button>
            </div>
        </section>
    )
}

export default Doing
