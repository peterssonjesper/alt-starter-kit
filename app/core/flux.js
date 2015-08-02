import Alt from 'alt';
import HelloWorldActions from '../actions/hello-world';
import HelloWorldStore from '../stores/hello-world';

class Flux extends Alt {

  constructor(config = {}) {
    super(config);

    this.addActions('hello-world', HelloWorldActions);
    this.addStore('hello-world', HelloWorldStore);
  }

}

const flux = new Flux();

export default flux;
