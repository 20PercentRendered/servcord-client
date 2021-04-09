import {
  BrowserRouter, Link, Route, Switch, 
} from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Main from './pages/Main';
import Login from './pages/Login';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-mount">
        <BrowserRouter>
          <Route path="/">
            <Main />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
