import * as actions from './actions/actionCreators';
import store from './store';

export default class {
  constructor() {
    this.startedAt = Date.now();
    this.lastSecond = 0;

    this.interval = setInterval(() => {
      const second = Math.round((Date.now() - this.startedAt) / 1000);

      if (second > this.lastSecond) {
        this.lastSecond = second;
        store.dispatch(actions.tick(second));
      }
    }, 50);
  }

  cancel() {
    clearInterval(this.interval);
  }
}
