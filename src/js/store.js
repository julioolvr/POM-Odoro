import { createStore, combineReducers } from 'redux';
import Immutable from 'immutable';
import * as types from './actions/actionTypes';
import * as reducers from './reducers/reducers';

const initialState = Immutable.Map();

function reducer(state = initialState, action) {
  switch (action.type) {
  case types.TICK:
    if (action.payload >= state.getIn(['pomodoro', 'pomodoroLength']) * 60) {
      state.getIn(['time', 'timer']).cancel();

      return state
        .setIn(['pomodoro', 'started'], false)
        .setIn(['time', 'secondsElapsed'], 0)
        .deleteIn(['time', 'timer']);
    }
  }

  return state
    .update('pomodoro', (pomodoroState) => reducers.pomodoro(pomodoroState, action))
    .update('time', (timeState) => reducers.time(timeState, action));
}

export default createStore(reducer);
