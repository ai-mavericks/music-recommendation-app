import axios from 'axios'
import * as React from 'react';


const apiurl = 'http://localhost:8000/api/'


const Login = async(username,password) => {
    console.log(username,password)
    var FormData = require('form-data');
    var data = new FormData();
    data.append('username', username);
    data.append('password', password);

    var config = {
    method: 'post',
    url: apiurl+'auth/login/',
    headers: { 
    },
    data : data
    };

    try{
        var res = await axios(config)
        .then(function (response) {
        return((response));
        })
        .catch(function (error) {
        return(error);
        });
        var data = await res.data
        return data
    }
    catch{ return null}
};


const Register = (username,password,password2,email,firstname,lastname) => {

}

const RefreshToken = (refreshToken) => {

}

const Logout = (refreshToken) => {

}

const GetUserProfile = (userid) => {

}


const APICalls = {
    Login,
    Register,
    RefreshToken,
    Logout
}

export default APICalls;


