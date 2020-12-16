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
import DenunciationModal from './components/DenunciationModal/index.js';
import ContactModal from './components/ContactModal/index.js';

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
            <p>oi</p>
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

          <Route path="/backoffice/publications">
          </Route>

          <Route path="/backoffice/users">
          </Route>

          <Route path="/backoffice/denunciations">

            <Switch>
                <Route path="/backoffice/denunciations/:id">
                  <DenunciationModal/>
                </Route>
            </Switch>
            
          </Route>

          <Route path="/backoffice/contacts">

            <Switch>
                <Route path="/backoffice/contacts/:id">
                    <ContactModal/>
                </Route>
            </Switch>

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
