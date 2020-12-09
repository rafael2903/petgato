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

function App() {
  return (
    <div className="App">
      <GlobalStyle />

      <Router>
        <Switch>
          <Route exact path="/">
            <p>oi</p>
          </Route>
          <Route path="/login">
            <Login />
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
