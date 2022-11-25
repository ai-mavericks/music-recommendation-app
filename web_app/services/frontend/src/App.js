import "./App.css";
import SignIn from "./Containers/signin";
import SignUp from "./Containers/register";
import ProfileSetup from "./Containers/InitialSetup/index";
import Dashboard from "./Containers/Dashboard/index";
import HomePage from "./Containers/HomePage";
import SongDetails from "./Containers/SongDetails";
import * as ROUTES from "./Helpers/routes";
import { useContext, useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  matchPath,
  useLocation,
} from "react-router-dom";



function App() {

  useEffect(() => {
    document.title = "Music Recommendation App"
  }, []);

  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path={ROUTES.HOME} element={
              <HomePage />
          }/>      
          <Route exact path={ROUTES.LOGIN} element={<SignIn />}/>
          <Route exact path={ROUTES.REGISTER} element={<SignUp />}/>
          <Route exact path={ROUTES.INITIALSETUP} element={<ProfileSetup />}/>
          <Route exact path={ROUTES.DASHBOARD} element={<Dashboard />}/>
          <Route exact path={ROUTES.SONGDETAILS+`/:songId`} element={<SongDetails />}/>

          {/* <Route exact path={ROUTES.PROFILE} element={<SignIn />}/>
          <Route exact path={ROUTES.RESETPASSWORD} element={<SignIn />}/> */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
