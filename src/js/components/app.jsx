'use strict';

import React from 'react';
import Immutable from 'immutable';

import Timer from './timer.jsx';

export default React.createClass({
  getInitialState() {
    return {
      data: Immutable.Map({ pomodoroLength: 25 })
    };
  },
  onPomodoroLengthChange(newLength) {
    this.setState(prev => ({
      data: prev.data.set('pomodoroLength', newLength)
    }));
  },
  render() {
    return (
      <Timer pomodoroLength={this.state.data.get('pomodoroLength')} onPomodoroLengthChange={this.onPomodoroLengthChange}/>
    );
  }
});
