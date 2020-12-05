import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles.js';
import Login from './pages/Login';

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
