'use strict';

import React from 'react';

class Timer extends React.Component {
  componentDidMount() {
    if (this.props.focusOnRender) {
      React.findDOMNode(this.refs.lengthInput).focus();
    }
  }

  onPomodoroLengthChange(event) {
    this.props.onPomodoroLengthChange(Number(event.target.textContent));
  }

  render() {
    return (
      <div>
        <p>
          Start a <span ref="lengthInput" contentEditable onInput={(e) => this.onPomodoroLengthChange(e)}>{this.props.pomodoroLength}</span> minutes
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
