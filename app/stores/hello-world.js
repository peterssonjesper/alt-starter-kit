class HelloWorldStore {

  constructor() {
    this.bindActions(this.alt.getActions('hello-world'));

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

export default HelloWorldStore;
