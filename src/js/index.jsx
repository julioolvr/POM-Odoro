import Styles from '../css/app.css'; // eslint-disable-line no-unused-vars
import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, Connector } from 'react-redux';
import store from './store';
import * as actions from './actions/actionCreators';
import App from './components/app.jsx';

function select(state) {
  return {
    pomodoro: state.get('pomodoro'),
    time: state.get('time')
  };
}

React.render(<Provider store={store}>
  {() =>
    <Connector select={select}>
      {({ pomodoro, time, dispatch }) =>
        <App pomodoro={pomodoro} time={time} {...bindActionCreators(actions, dispatch)}/>
      }
    </Connector>
  }
</Provider>, document.getElementById('app'));
