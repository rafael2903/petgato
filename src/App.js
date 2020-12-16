import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import SignUp from './pages/SignUp';

import  './App.scss' ;
import Home from './pages/Home/index.js';

function App() {
  
  const [loggedIn, setloggedIn] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedIn'));
  });

  const [id, setId] = useState(() => {
    return localStorage.getItem('id');
  });
  
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token');
  });
  const [admin, setAdmin] = useState(() => {
    return localStorage.getItem('admin');
  });

  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login setloggedIn={setloggedIn} setId={setId} setToken={setToken} setAdmin={setAdmin}/>}
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="/recovery">
            <Recovery />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
