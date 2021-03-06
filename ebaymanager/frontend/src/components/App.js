import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import store from '../store';
import { loadUser } from '../actions/auth';

import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';

import Header from './layout/Header';
import Dashboard from './dvds/Dashboard';
import Show from './dvds/Show';

//Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              <div className='container'>
                <Switch>
                  <PrivateRoute exact path='/' component={Dashboard} />
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <PrivateRoute
                    path='/:id'
                    component={props => (
                      <Show id={props.match.params.id} />
                    )}
                  />
                  </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
