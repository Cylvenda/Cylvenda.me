import React from 'react'

const formValidation = (values) => {

    let msg = {}

    if (values.name === '') {
        msg.name = 'Username is Required..'
    }

    if (values.email === '') {
        msg.email = 'Email field is Required..'
    }

    if (values.phone === '') {
        msg.phone = 'Phonenumber is Required..'
    } else if (isNaN(values.phone)) {
        msg.phone = 'You can not put characters as a phonenumber'
    } else if (values.phone.length < 10) {
        msg.phone = 'Your phone number is not correct, it is too short'
    } else if (values.phone.length > 10) {
        msg.phone = 'Your phone number is not correct, it is too long'
    }

    if (values.password === '') {
        msg.password = 'Password is Required..'
    } else if (values.password.length < 6) {
        msg.password = 'Your password is too short..'
    }
    return msg;
}

export default formValidation