import Immutable from 'immutable';
import * as types from '../actions/actionTypes';

import Ticker from '../ticker';

const initialState = Immutable.Map({ secondsElapsed: 0 });

export default function timeReducer(state = initialState, action) {
  switch (action.type) {
  case types.TICK:
    return state.update('secondsElapsed', (previousSeconds) => ++previousSeconds);
  case types.START_POMODORO:
    return state.set('timer', new Ticker());
  case types.STOP_POMODORO:
    state.get('timer').cancel();

    return state
      .set('secondsElapsed', 0)
      .delete('timer');
  }

  return state;
}
