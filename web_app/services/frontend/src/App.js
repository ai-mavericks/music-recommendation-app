import "./App.css";
import SignIn from "./Containers/signin";
import SignUp from "./Containers/register";
import InitialSetup from "./Containers/initailsetup";
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
          <Route exact path={ROUTES.HOME} element={<SignIn />}/>      
          <Route exact path={ROUTES.LOGIN} element={<SignIn />}/>
          <Route exact path={ROUTES.REGISTER} element={<SignUp />}/>
          <Route exact path={ROUTES.INITIALSETUP} element={<InitialSetup />}/>


          <Route exact path={ROUTES.PROFILE} element={<SignIn />}/>
          <Route exact path={ROUTES.RESETPASSWORD} element={<SignIn />}/>
          <Route exact path={ROUTES.DASHBOARD} element={<SignIn />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
