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
import GenreSelect from './genreSelect'
import LoggedInTopBar from '../../Components/LoggedInTopBar';



const theme = createTheme();

export default function ProfileSetup() {

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
          <Typography variant="h6" color="inherit" noWrap>
            MusicDom - Music Recommendation System
          </Typography>
        </Toolbar>
      </AppBar>
        );
    };


    return(
      <ThemeProvider theme={theme}>
         <LoggedInTopBar/>
         <GenreSelect/>
       </ThemeProvider>
    );

}