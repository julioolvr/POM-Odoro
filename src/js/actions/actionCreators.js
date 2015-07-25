import * as types from './actionTypes';

export function startPomodoro() {
  return {
    type: types.START_POMODORO
  };
}

export function stopPomodoro() {
  return {
    type: types.STOP_POMODORO
  };
}

export function newPomodoroLength(newLength) {
  return {
    type: types.NEW_POMODORO_LENGTH,
    payload: newLength
  };
}

export function tick(secondsElapsed) {
  return {
    type: types.TICK,
    payload: secondsElapsed
  };
}
