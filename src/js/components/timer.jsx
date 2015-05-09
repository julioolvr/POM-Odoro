'use strict';

import React from 'react';
import Immutable from 'immutable';

export default React.createClass({
  startPomodoro() {
    console.log('starting pomodoro!');
  },
  onPomodoroLengthChange(event) {
    this.props.onPomodoroLengthChange(Number(event.target.textContent));
  },
  render() {
    return (
      <div>
        <p>
          Start a <span contentEditable onInput={this.onPomodoroLengthChange}>{this.props.pomodoroLength}</span> minutes pomodoro.
        </p>
        <button onClick={this.startPomodoro}>Start</button>
      </div>
    );
  }
});
