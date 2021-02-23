import axios from 'axios'

const API_URL = `${process.env.REACT_APP_FLASK_API_URL}` + '/api/v1/users/'

// register user
export const register = (username, email, password, city, state, about) => {
    return axios
    .post(API_URL + 'register', {
        username,
        email,
        password,
        city,
        state,
        about
    })
}

// login user - need to figure out currentUser/local storage
export const login = (email, password) => {
    return axios 
    .post(API_URL + 'login', {
        email,
        password
    })
    .then((response) => {
        console.log(response)
    })
}

// get current user

// logout user - need currentUser

// delete user - need currentUser

// edit routes all need currentUser

// getProfile needs currentUser