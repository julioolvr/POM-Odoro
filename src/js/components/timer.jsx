'use strict';

import React from 'react';
import Immutable from 'immutable';

export default React.createClass({
  getDefaultProps() {
    return Immutable.fromJS({
      pomodoroLength: 25
    });
  },
  startPomodoro() {
    console.log('starting pomodoro!');
  },
  render() {
    return (
      <div>
        <p>
          Start a <input type="text" defaultValue={this.props.get('pomodoroLength')}/> minutes pomodoro.
        </p>
        <button onClick={this.startPomodoro}>Start</button>
      </div>
    );
  }
});
