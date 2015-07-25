import Immutable from 'immutable';
import * as types from '../actions/actionTypes';
import * as actions from '../actions/actionCreators';
import store from '../store';

const initialState = Immutable.Map({ pomodoroLength: 25, started: false });

export default function pomodoroReducer(state = initialState, action) {
  switch (action.type) {
  case types.NEW_POMODORO_LENGTH:
    if (action.payload > 0) {
      return state.set('pomodoroLength', action.payload);
    } else {
      return state;
    }
  case types.START_POMODORO:
    return state.set('started', true);
  case types.STOP_POMODORO:
    return state.set('started', false);
  }

  return state;
}

