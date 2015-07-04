'use strict';

import React from 'react';

class Timer extends React.Component {
  onPomodoroLengthChange(event) {
    const newValue = event.target.value;

    if (newValue.match(/\d*/)) {
      this.props.onPomodoroLengthChange(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <p>
          Start a <input maxLength="2" autoFocus ref="lengthInput" onInput={(e) => this.onPomodoroLengthChange(e)} value={this.props.pomodoroLength}></input> minutes
          pomodoro.
        </p>
        <a className="btn" onClick={this.props.onPomodoroStart}>Start</a>
        <a className="btn" onClick={this.props.onPomodoroStop}>Stop</a>
      </div>
    );
  }
}

Timer.defaultProps = { focusOnRender: true };

export default Timer;
