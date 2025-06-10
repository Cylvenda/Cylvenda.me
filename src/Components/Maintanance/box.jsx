import React from 'react'
import './box.css'

const box = ({ setShowMaintanance }) => {
    return (
        <>
            <div className="Login-container">
                <div data-aos="flip-left" data-aos-duration="2000" className="form-container">
                    <div className="box-body">
                        <div className="box-content">
                                <h3>Cylvenda Technologies - System Maintenance</h3>
                                <div className="maintenance-content">
                                    <p>We're currently performing scheduled maintenance to improve your experience.</p>
                                    <h5>Unavailable Services</h5>
                                    <ul>
                                        <li>User registration and login services are temporarily unavailable</li>
                                        <li>Existing customer data remains secure</li>
                                        <li>All other inquiries can still reach our support team</li>
                                    </ul>
                                    <p>We apologize for any inconvenience and appreciate your patience.</p>
                                    <div className="support-info">
                                        <p>Need immediate assistance? Contact our support team:</p>
                                        <p>Email: <a href="mailto:cylvenda@gmail.com">cylvenda@gmail.com</a> <br />
                                            Phone: <a href="tel:+255780598902">+255780598902</a></p>
                                    </div>
                            </div>
                            <button onClick={() => setShowMaintanance(false)} type="button">Close</button>
                        </div>
                    </div>
                </div >
                </div >
            </>
            )
}

            export default box
