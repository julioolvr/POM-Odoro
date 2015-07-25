import React from 'react';
import Immutable from 'immutable';
import classNames from 'classnames';

import * as actions from '../actions/actionCreators';

import Timer from './timer.jsx';

import startSoundPath from '../../sounds/tick-tock.wav';
import endSoundPath from '../../sounds/bell.wav';
import tomatoIconPath from '../../img/tomato.png';

const startSound = new Audio(startSoundPath);
const endSound = new Audio(endSoundPath);

export default class extends React.Component {
  componentDidMount() {
    Notification.requestPermission();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.pomodoro.get('started') && nextProps.pomodoro.get('started')) {
      startSound.play();
    }

    if (this.props.pomodoro.get('started') && !nextProps.pomodoro.get('started')) {
      endSound.play();

      if (this.props.time.get('secondsElapsed') + 1 === this.props.pomodoro.get('pomodoroLength') * 60) {
        new Notification('POM Odoro', { // eslint-disable-line no-new
          body: 'Pomodoro finished!',
          icon: tomatoIconPath
        });
      }
    }
  }

  onPomodoroLengthChange(newLength) {
    this.props.newPomodoroLength(Number(newLength));
  }

  timeElapsed(seconds) {
    return `${Math.floor(seconds / 60)}:${((seconds % 60) < 10 ? '0' : '') + seconds % 60}`;
  }

  render() {
    return (
      <div className="container">
        <div className={classNames('running-background', { running: this.props.pomodoro.get('started') })}></div>
        <div className="timer-container">
          <Timer pomodoroLength={this.props.pomodoro.get('pomodoroLength')}
                 started={this.props.pomodoro.get('started')}
                 onPomodoroLengthChange={(e) => this.onPomodoroLengthChange(e)}
                 onPomodoroStart={() => this.props.startPomodoro()}
                 onPomodoroStop={() => this.props.stopPomodoro({ canceled: true })}/>
               Time elapsed: {this.timeElapsed(this.props.time.get('secondsElapsed'))}
        </div>
        <p className="disclaimer">
          Small <a href="http://facebook.github.io/react/" target="_blank">React.js</a> experiment by <a href="https://twitter.com/_joliv" target="_blank">@_joliv</a>. <a href="https://github.com/julioolvr/pom-odoro" target="_blank">Fork me on Github.</a>
        </p>
      </div>
    );
  }
}
