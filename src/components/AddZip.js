import React from 'react';

import { save } from '../actions/UserActions.js';

export default class AddZip extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this._onChange = this._onChange.bind(this);
    this._onEnter = this._onEnter.bind(this);
    this._save = this._save.bind(this);
  }

  _save() {
    save(this.state.text);
    this.setState({
      text: ''
    });
  }

  _onChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  _onEnter(event) {
    if (event.keyCode === 13) {
      this._save();
    }
  }

  render() {
    return (
      <div className="row collapse">
        <div className="small-9 columns">
          <input type="number"
              value={this.state.text}
              placeholder="Enter your zip"
              onChange={this._onChange}
              onKeyDown={this._onEnter}
              autoFocus="true" />
        </div>
        <div className="small-3 columns">
          <button type="button" className="button postfix"
              onClick={this._save}
              disabled={!this.state.text}>
            Submit
          </button>
        </div>
      </div>
    )
  }
}
