import React from 'react';
import Immutable from 'immutable';

import Timer from './timer.jsx';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Immutable.Map({ pomodoroLength: 25, secondsElapsed: 0 })
    };
  }

  onPomodoroLengthChange(newLength) {
    this.setState(prev => ({
      data: prev.data.set('pomodoroLength', Number(newLength))
    }));
  }

  startTimer() {
    this.setState(prev => ({
      data: prev.data.merge({
        timer: setInterval(() => this.tick(), 50),
        startedAt: Date.now()
      })
    }));
  }

  stopTimer() {
    clearInterval(this.state.data.get('timer'));
    this.setState(prev => ({
      data: prev.data
        .delete('timer')
        .delete('startedAt')
        .set('secondsElapsed', 0)
    }));
  }

  tick() {
    var secondsElapsed = Math.round((Date.now() - this.state.data.get('startedAt')) / 1000);

    if (secondsElapsed / 60 < this.state.data.get('pomodoroLength')) {
      this.setState(prev => ({
        data: prev.data.set('secondsElapsed', secondsElapsed)
      }));
    } else {
      this.stopTimer();
    }
  }

  render() {
    return (
      <div className="timer-container">
        <Timer pomodoroLength={this.state.data.get('pomodoroLength')}
               onPomodoroLengthChange={(e) => this.onPomodoroLengthChange(e)}
               onPomodoroStart={() => this.startTimer()}
               onPomodoroStop={() => this.stopTimer()}/>
        Seconds elapsed: {this.state.data.get('secondsElapsed')}
      </div>
    );
  }
}
