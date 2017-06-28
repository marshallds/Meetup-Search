import React, { Component } from 'react';
import './App.css';

import AddZip from './components/AddZip';
import Meetups from './components/Meetups';

import Store from './stores/Store';

import { save } from './actions/UserActions.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = Store.getStore();
    this._onChange = this._onChange.bind(this);
  }

  _onChange() {
    let store = Store.getStore()
    this.setState(store);
  }

  componentDidMount() {
    Store.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange);
  }

  render() {
    return (
      <div>
        <nav className="topbar">
          <div className="title row">
            <div className="large-8 medium-8 columns">
              Meetup Group Search
              <i className="wi wi-day-cloudy"></i>
            </div>
            <div className="large-4 medium-4 columns">
              <AddZip key={-1} />
            </div>
          </div>
        </nav>
        <div className="row column">
          <div className="large-12 columns">
            <div className="row small-up-2 medium-up-3 large-up-4">
              <h2>{this.state.zip}</h2>
              <Meetups groups={this.state.groups} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
