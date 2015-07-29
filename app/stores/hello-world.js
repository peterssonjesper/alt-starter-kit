import alt from '../core/alt';
import HelloWorldActions from '../actions/hello-world';

class HelloWorldStore {

  constructor() {
    this.bindListeners({
      say: HelloWorldActions.say
    });

    this.state = {
      text: 'world'
    };
  }

  say(payload) {
    this.setState({
      text: payload.text
    });
  }

}

export default alt.createStore(HelloWorldStore, 'HelloWorldStore');
