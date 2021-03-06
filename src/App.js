import { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import './App.scss';
import { GlobalStyle } from './GlobalStyles.js';

import Contact from './pages/Contact';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import SignUp from './pages/SignUp';
import Home from './pages/Home/index.js';
import Post from './pages/Post/index.js';
import Profile from './pages/Profile/index.js';
import About from './pages/About/index.js';
import Contacts from './pages/backoffice/Contacts/index.js';
import Users from './pages/backoffice/Users/index.js';
import EditUser from './pages/backoffice/EditUser/index.js';
import Tags from './pages/backoffice/Tags/index.js';
import TagPatch from './pages/backoffice/TagPatch/index.js';
import PostEdit from './pages/backoffice/PostEdit/index.js';
import Publications from './pages/backoffice/Publications/index.js';

import DenunciationModal from './components/DenunciationModal/index.js';
import ContactModal from './components/ContactModal/index.js';
import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';
import Building from './components/Building/index.js';

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
        <div className='App'>
            <GlobalStyle />

            <Router>
                <Switch>
                    <Route path='/login'>
                        {loggedIn ? (
                            <Redirect to='/' />
                        ) : (
                            <Login
                                setloggedIn={setloggedIn}
                                setId={setId}
                                setToken={setToken}
                                setAdmin={setAdmin}
                            />
                        )}
                    </Route>

                    <Route path='/join'>
                        {loggedIn ? <Redirect to='/' /> : <SignUp />}
                    </Route>

                    <Route path='/recovery'>
                        {loggedIn ? <Redirect to='/' /> : <Recovery />}
                    </Route>

                    <Route path='/'>
                        <Navbar
                            loggedIn={loggedIn}
                            admin={admin}
                            setloggedIn={setloggedIn}
                            setId={setId}
                            setToken={setToken}
                            setAdmin={setAdmin}
                        />

                        <Switch>
                            <Route exact path='/'>
                                {/* <Home /> */}
                                <Building />
                            </Route>

                            <Route path='/contact'>
                                <Contact />
                            </Route>

                            <Route path='/about'>
                                <About />
                            </Route>

                            <Route path='/user/:id'>
                                <Profile />
                            </Route>

                            <Route path='/post/:id'>
                                <Post />
                            </Route>

                            <Route path='/backoffice/publications' exact>
                                <Publications />
                            </Route>

                            <Route path='/backoffice/publications/create'>
                                <PostEdit />
                            </Route>

                            <Route path='/backoffice/publications/edit/:id'>
                                {/* <PostEdit /> */}
                                <Building />
                            </Route>

                            <Route path='/backoffice/users/:id'>
                                <EditUser token={token} />
                            </Route>

                            <Route path='/backoffice/tags/create'>
                                <TagPatch type='create' />
                            </Route>

                            <Route path='/backoffice/tags/:id'>
                                <TagPatch type='edit' />
                            </Route>

                            <Route path='/backoffice/tags' exact>
                                <Tags />
                            </Route>

                            <Route path='/backoffice/users/:id'>
                                <EditUser token={token} />
                            </Route>

                            <Route path='/backoffice/users'>
                                <Users token={token} />
                            </Route>

                            <Route path='/backoffice/denunciations'>
                                <Building />
                                <Switch>
                                    <Route path='/backoffice/denunciations/:id'>
                                        <DenunciationModal />
                                    </Route>
                                </Switch>
                            </Route>

                            <Route path='/backoffice/contacts'>
                                <Contacts />
                                <Switch>
                                    <Route path='/backoffice/contacts/:id'>
                                        <ContactModal />
                                    </Route>
                                </Switch>
                            </Route>

                            <Route path='/backoffice/:id'></Route>
                        </Switch>

                        <Footer />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
