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
import Home from './pages/Home/index.js';
import DenunciationModal from './components/DenunciationModal/index.js';
import ContactModal from './components/ContactModal/index.js';

import  './App.scss' ;
import Navbar from './components/Navbar/index.js';
import About from './pages/About/index.js';
import Footer from './components/Footer/index.js';
import Profile from './pages/Profile/index.js';
import Contacts from './pages/backoffice/Contacts/index.js';
import Users from './pages/backoffice/Users/index.js';
import EditUser from './pages/backoffice/EditUser/index.js';
import Tags from './pages/backoffice/Tags/index.js';
import TagPatch from './pages/backoffice/TagPatch/index.js';

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

          <Route path="/login">
            {loggedIn ? <Redirect to="/" /> : <Login setloggedIn={setloggedIn} setId={setId} setToken={setToken} setAdmin={setAdmin}/>}
          </Route>

          <Route path="/join">
            {loggedIn ? <Redirect to="/" /> : <SignUp />}
          </Route>

          <Route path="/recovery">
            {loggedIn ? <Redirect to="/" /> : <Recovery />}
          </Route>

          <Route path='/'>
            <Navbar loggedIn={loggedIn} id={id} admin={admin}/>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/contact">
                <Contact />
              </Route>

              <Route path="/about">
                <About />
              </Route>

              <Route path="/user/:id">
                <Profile />
              </Route>

              <Route path="/backoffice/publications">
              </Route>

              <Route path="/backoffice/users/:id">
                  <EditUser token={token}/>
              </Route>

              <Route path="/backoffice/tags/create">
                  <TagPatch type='create'/>
              </Route>

              <Route path="/backoffice/tags/:id">
                <TagPatch type='edit'/>
              </Route>

              <Route path="/backoffice/tags" exact>
                <Tags />
              </Route>

              <Route path="/backoffice/users">
                <Users token={token} />
              </Route>

              <Route path="/backoffice/denunciations">
                <Switch>
                    <Route path="/backoffice/denunciations/:id">
                      <DenunciationModal/>
                    </Route>
                </Switch>
              </Route>

              <Route path="/backoffice/contacts">
                <Contacts />
                <Switch>
                    <Route path="/backoffice/contacts/:id">
                        <ContactModal/>
                    </Route>
                </Switch>
              </Route>

            </Switch>

            <Footer />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
