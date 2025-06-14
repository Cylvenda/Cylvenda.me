import React, { useState } from 'react'
import './Login.css'
import { assets } from '../../assets/assets';
import formValidation from './validations';
import axios from 'axios';

const LoginForm = ({ setShowForm, setShowMaintanance }) => {

    const url = 'http://localhost:5000/cylvenda'
    const [formCondition, setFormCondition] = useState("Register");
    const [formErrors, setFormErrors] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',

    });

    const handleInputs = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setFormData(formData => ({ ...formData, [name]: value }))

        // console.log(formData)
    }

    const formHandler = async (event) => {
        event.preventDefault();
        let currentUrl

        if(formValidation(formData)){
            setFormErrors(formValidation(formData))
        }


            setShowMaintanance(true)
            setShowForm(false)

        // console.log(formErrors)

        //for now before backend developed


        // if (formCondition === 'Register') {
        //     currentUrl += 'user/register'
        // } else if (formCondition === 'Login') {
        //     currentUrl += 'user/login'
        // }

        // const response = await axios.post(currentUrl, formData);

    }

    return (
        <div className='Login-container'>
            <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="form-container">
                <div className="form-header">
                    <h3>{formCondition} To Home Comming</h3><span className='closeForm' onClick={() => setShowForm(false)}>
                        <img src={assets.close} alt="X" /> </span>
                </div>
                <form onSubmit={formHandler}>
                    {
                        formCondition === "Register" ?
                            <div className="form-content">
                                <label htmlFor="fname">Username</label>
                                <input type="text" name='name' onChange={handleInputs} placeholder='Enter Your First Name..' />
                                {formErrors.name ? <span>{formErrors.name}</span> : ''}
                            </div>
                            : ""
                    }
                    <div className="form-content">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" onChange={handleInputs} placeholder='Enter Your Email..' />
                        {formErrors.email ? <span>{formErrors.email}</span> : ''}
                    </div>
                    {
                        formCondition === "Register" ?
                            <div className="form-content">
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" name="phone" onChange={handleInputs} placeholder='Enter Your Phone Number [0780....]' />
                                {formErrors.phone ? <span>{formErrors.phone}</span> : ''}
                            </div> : ""
                    }
                    <div className="form-content">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={handleInputs} placeholder='Enter Your Password' />
                        {formErrors.password ? <span>{formErrors.password}</span> : ''}
                    </div>
                    {
                        formCondition === "Login" ?
                            <div className="form-check">
                                <label htmlFor="rememberMe">
                                    <input type="checkbox" name="rememberMe" />
                                    Remember Me
                                </label>

                                <span className='new-pass'>Forget Password</span>
                            </div> : ""
                    }
                    <button type="submit">{formCondition}</button>

                    <div className="sign-up">
                        {
                            formCondition === "Register"
                                ?
                                <span onClick={() => setFormCondition("Login")} >Already have an acoount ? <span onClick={() => setFormCondition("Login")} className='red'>Login</span></span>
                                :
                                <span onClick={() => setFormCondition("Register")} > Create a new account  <span onClick={() => setFormCondition("Regigister")} className='red'>Click Here</span></span>
                        }
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginForm
