import axios from 'axios'
import * as React from 'react';


// const apiAuthUrl = process.env.REACT_APP_AUTH_API_URL
// const apiAppUrl = process.env.REACT_APP_APP_API_URL

const apiAuthUrl = 'http://18.222.117.235:8000/api/auth/'
const apiAppUrl = 'http://18.222.117.235:8000/api/app/'


// const apiAuthUrl = 'http://localhost:8000/auth/'
// const apiAppUrl = 'http://localhost:8000/api/app/'

const Login = async(username,password) => {
    console.log(username,password)
    var FormData = require('form-data');
    var data = new FormData();
    data.append('username', username);
    data.append('password', password);

    var config = {
    method: 'post',
    url: apiAuthUrl+'login/',
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

const Logout = async(refreshToken) => {

    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('refresh', refreshToken);

    var config = {
    method: 'post',
    url: apiAuthUrl+'logout/',
    headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('access'), 
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
    }
    catch { return null}

}

const GetUserProfile = (userid) => {  

}

const GetTracks = async(page) => {
    var FormData = require('form-data');
    var data = new FormData();
    var config = {
    method: 'get',
    url: apiAppUrl+'track/?page='+page,
    headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('access'), 
    },
    data : data
    };

    try 
    {
        var res = await axios(config)
        .then(function (response) {
        return((response));
        })
        .catch(function (error) {
        return(error);
        });
        var data = await res.data.results
        return data
    }
    catch(err)
    {
        return err
    }

}

const GetAlbum = async(albumId) => {
    var FormData = require('form-data');
    var data = new FormData();
    var config = {
    method: 'get',
    url: apiAppUrl+'album/'+albumId,
    headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('access'), 
    },
    data : data
    };

    try 
    {
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
    catch(err)
    {
        return err
    }

}

const GetArtist = async(artistId) => {
    var FormData = require('form-data');
    var data = new FormData();
    var config = {
    method: 'get',
    url: apiAppUrl+'artist/'+artistId,
    headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('access'), 
    },
    data : data
    };

    try 
    {
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
    catch(err)
    {
        return err
    }

}


const GetGenre = async(genreId) => {
    var FormData = require('form-data');
    var data = new FormData();
    var config = {
    method: 'get',
    url: apiAppUrl+'genre/'+genreId,
    headers: { 
        'Authorization': 'Bearer ' + localStorage.getItem('access'), 
    },
    data : data
    };

    try 
    {
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
    catch(err)
    {
        return err
    }

}


const APICalls = {
    Login,
    Register,
    RefreshToken,
    Logout,
    GetTracks,
    GetAlbum,
    GetArtist,
    GetGenre
}

export default APICalls;


