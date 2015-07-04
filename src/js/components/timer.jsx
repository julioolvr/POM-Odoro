'use strict';

import React from 'react';
import Immutable from 'immutable';

export default class extends React.Component {
  onPomodoroLengthChange(event) {
    this.props.onPomodoroLengthChange(Number(event.target.textContent));
  }

  render() {
    return (
      <div>
        <p>
          Start a <span contentEditable onInput={(e) => this.onPomodoroLengthChange(e)}>{this.props.pomodoroLength}</span> minutes
          pomodoro.
        </p>
        <a className="btn" onClick={this.props.onPomodoroStart}>Start</a>
        <a className="btn" onClick={this.props.onPomodoroStop}>Stop</a>
      </div>
    );
  }
};
