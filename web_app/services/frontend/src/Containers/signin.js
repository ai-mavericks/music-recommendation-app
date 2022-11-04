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
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import APICalls from '../Helpers/api'
import {useState} from 'react'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import * as ROUTES from "../Helpers/routes"
import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'

// import { connect } from 'react-redux';
// import * as actions from '../../actions'; 

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loginFailed, setLoginFailed] = useState(false);
  const [loginStarted, setLoginStarted] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    var loggedIn = (localStorage.getItem("userLoggedIn")=='true');
    {loggedIn && navigate(ROUTES.DASHBOARD)}
    // {!loggedIn && navigate(ROUTES.LOGIN)}
})

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const errorSnackbar = () => {
    return(
      <Snackbar open={loginFailed} autoHideDuration={3000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose}  severity="error" sx={{ width: '100%' }}>
          Wrong Credentials. Please try again
        </Alert>
      </Snackbar>
    )
  }


  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginFailed(false);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    var data = await APICalls.Login(userName,password)
    if(data)
    {
      setLoginStarted(true)
      localStorage.setItem('access', data.access)
      localStorage.setItem('refresh', data.refresh)
      console.log(data.id)
      var profileData = await APICalls.GetUserProfile(data.id)
      if(!profileData)
        setLoginFailed(true)
      localStorage.setItem('firstName', profileData.first_name)
      localStorage.setItem('lastName', profileData.last_name)
      localStorage.setItem('userLoggedIn', "true")
      navigate(ROUTES.DASHBOARD)
      setLoginStarted(false)
    }
    else{
      setLoginFailed(true)
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {errorSnackbar()}
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            MusicDom - Music Recommendation System
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              autoComplete="current-password"
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            {!loginStarted &&<Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>}
            {loginStarted && <Button
              type="submit"
              fullWidth
              disabled
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: 'green' }}
            >
              Logging In
            </Button>
            }
            <Grid container>
              {/* <Grid item xs>
                <Link href="/resetpassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}