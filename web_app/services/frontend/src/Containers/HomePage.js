import React from 'react'
import {useState, useEffect} from 'react'
import Dashboard from './Dashboard'
import SignIn from './signin'
import { useNavigate } from 'react-router-dom';
import * as ROUTES from "../Helpers/routes"


function HomePage() {


    const navigate = useNavigate();
    var loggedIn = (localStorage.getItem("userLoggedIn")=='true');

    useEffect(()=>{

        {loggedIn && navigate(ROUTES.DASHBOARD)}
        {!loggedIn && navigate(ROUTES.LOGIN)}
    })
    
    return (
    <>

    </>
    )
}

export default HomePage