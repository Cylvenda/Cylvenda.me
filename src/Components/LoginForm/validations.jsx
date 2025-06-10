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
    } else if (Number(values.phone)) {
        msg.phone = 'You can not put characters as a phonenumber'
    }

    if (values.password === '') {
        msg.password = 'Password is Required..'
    } else if (values.password.length < 6) {
        msg.password = 'Your password is too short..'
    }
    return msg;
}

export default formValidation