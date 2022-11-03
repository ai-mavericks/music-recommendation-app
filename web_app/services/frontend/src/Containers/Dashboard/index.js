import * as React from 'react';
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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { useContext, useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import * as ROUTES from "../../Helpers/routes"

export default function Dashboard() {

  const navigate = useNavigate();

    useEffect(() => {
        // axios.get('https://ui-avatars.com/api/?name='+userName).then((response) => {
        //     console.log(response)
        if(localStorage.getItem('refresh')){
          var userName = localStorage.getItem('firstName') + '+' + localStorage.getItem('lastName')
          console.log(userName)
          setUserName(userName)
          setProfileImageLink('https://ui-avatars.com/api/?rounded=true&&name='+userName);
        }
        else{
          navigate(ROUTES.LOGIN)
        }


      }, []);

    const [profileImageLink, setProfileImageLink] = useState();
    const [userName, setUserName] = useState('');

    const TopBar = () => {
        return(
            <AppBar
                position="absolute"
                color="default"
                elevation={0}
                sx={{
                position: 'relative',
                backgroundColor: '#1976d2',
                color: 'white',
                borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            MusicDom - Music Recommendation System
          </Typography>
          <IconButton color="inherit">
              <Badge  color="secondary">
                <img src={profileImageLink} style={{width: '40px'}}/>
                {/* <NotificationsIcon /> */}
              </Badge>
            </IconButton>
        </Toolbar>
      </AppBar>
        );
    };

    return(
        <Box>
            {TopBar()} 
        </Box>


    )
}

