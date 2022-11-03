import axios from 'axios'
import * as React from 'react';


const apiurl = 'http://localhost:8000/'


const Login = (username,password) => {

    var FormData = require('form-data');
    var data = new FormData();
    data.append('username', username);
    data.append('password', password);

    var config = {
    method: 'post',
    url: apiurl+'auth/login/',
    headers: { 
        ...data.getHeaders()
    },
    data : data
    };

    axios(config)
    .then(function (response) {
    console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    return({
      email: data.get('email'),
      password: data.get('password'),
    });
};


const Register = (username,password,password2,email,firstname,lastname) => {

}

const RefreshToken = (refreshToken) => {

}

const Logout = (refreshToken) => {

}


const APICalls = {
    Login,
    Register,
    RefreshToken,
    Logout
}

export default APICalls;


