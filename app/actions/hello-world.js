import alt from '../core/alt';

class HelloActions {
  say(text) {
    return { text }
  }
}

export default alt.createActions(HelloActions);
