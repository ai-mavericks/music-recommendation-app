import "./App.css";
import SignIn from "./Containers/SignIn/index";
import * as ROUTES from "./Helpers/routes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  matchPath,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path={ROUTES.HOME} element={<SignIn />}/>      
          <Route exact path={ROUTES.LOGIN} element={<SignIn />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
