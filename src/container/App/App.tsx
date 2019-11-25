import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Router } from "react-router";
// import { ConnectedRouter } from 'connected-react-router'

import history from '../../lib/history';
import './App.css';
import { Robot } from '../../Interfaces';
import Home from '../Home'
import User from '../User/index';
import NavBar from '../../components/NabBar';

interface IAppProps {
  onFetchUser: () => void,
  onSearchChange: (val: string) => void,
  searchfield: string,
  robots: Robot[],
  isPending: boolean,
  error: string
}

interface IAppState {

}

class App extends Component<IAppProps, IAppState> {

  componentDidMount() {
    this.props.onFetchUser()
  }

  onSearchChange = (val: string) => {
    this.props.onSearchChange(val)
  }

  render() {
    return (
      <div className='tc'>
        <Router history={history}>
          <NavBar onSearchChange={this.onSearchChange} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/:id" component={User} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;