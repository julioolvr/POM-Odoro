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
          Start a&nbsp;
          <input maxLength="2" autoFocus ref="lengthInput" disabled={this.props.started}
                 onInput={(e) => this.onPomodoroLengthChange(e)} value={this.props.pomodoroLength}></input>
          &nbsp;{this.props.pomodoroLength !== 1 ? 'minutes' : 'minute'} pomodoro.
        </p>
        <button className="btn" disabled={this.props.started} onClick={this.props.onPomodoroStart}>Start</button>
        <button className="btn" disabled={!this.props.started} onClick={this.props.onPomodoroStop}>Stop</button>
      </div>
    );
  }
}

Timer.defaultProps = { focusOnRender: true };

export default Timer;
