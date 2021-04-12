import {
  BrowserRouter, Route, RouteComponentProps, withRouter, 
} from 'react-router-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Main from './pages/Main';
import Login from './pages/Login';

class App extends React.Component<RouteComponentProps> {
  componentDidMount() {
    const { history } = this.props;
    if (!localStorage.getItem('token')) {
      console.log('forcing login');
      history.push('/login');
    } else if (localStorage.getItem('instances')) {
      history.push('/app');
    } else {
      history.push('/instances');
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (window as any).CustomHistory = history;
  }

  render() {
    return (
      <>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/app">
          <Main />
        </Route>
        <Route path="/channels/:guildId/:channelId">
          <Main />
        </Route>
      </>
    );
  }
}
export default withRouter(App);
