import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import APICalls from '../Helpers/api'
import * as ROUTES from "../Helpers/routes"
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';



function SongDetails() {

    const {songId} = useParams();

    useEffect(() => {
      console.log("The song id is",songId )

    });
    
    return (
        <div>
            <Typography>{songId}</Typography>
        </div>
    );
}

export default SongDetails;