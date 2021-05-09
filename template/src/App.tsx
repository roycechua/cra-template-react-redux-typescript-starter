import React, { useState, useEffect } from 'react';
// Theme
import "./theme/theme.scss";

// Routes
import { Router, Route, Switch, Redirect } from "react-router-dom";
import routesContainer from "./routes/routesContainer";
import history from "./routes/history";

import Login from './pages/auth/Login';
import { useAppSelector } from './redux/hooks';
import { selectAuthState } from './pages/auth/authSlice';   
import NotFound from './pages/NotFound';

const App = () => {
  // const historyHook = useHistory();
  const [token, setToken] = useState<string | null>('');
  
  useEffect(() => {
    if(window.localStorage.getItem('AUTH_TOKEN')) {
      setToken(window.localStorage.getItem('AUTH_TOKEN'));
    }
  }, [window.localStorage.getItem('AUTH_TOKEN')])
  
  return (
    <Router history={history}>
      <Switch>
          <Route path="/" exact component={Login} />
          {
            token ? <Route path="/" component={routesContainer} />
            : <Route path="*" component={NotFound}/>
          }
      </Switch>
    </Router>
  );
}

export default App;
