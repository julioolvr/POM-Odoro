'use strict';

import React from 'react';
import Immutable from 'immutable';

export default React.createClass({
  startPomodoro() {
    console.log('starting pomodoro!');
  },
  onPomodoroLengthChange(event) {
    this.props.onPomodoroLengthChange(Number(event.target.value));
  },
  render() {
    return (
      <div>
        <p>
          Start a <input type="text" defaultValue={this.props.pomodoroLength} onChange={this.onPomodoroLengthChange}/> minutes pomodoro.
        </p>
        <button onClick={this.startPomodoro}>Start</button>
      </div>
    );
  }
});
