import React from 'react';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Webnavbar from './components/Layout/Webnavbar'
import './App.css';

// Components
import People from './components/People/People'
import Personform from './components/Personform/Personform'

function App() {
  return (
    <Router>
      <Webnavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addperson">
          <Personform />
        </Route>
        <Route path="/people">
          <People />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
