import React from 'react';

class HelloWorld extends React.Component {

  static contextTypes = {
    flux: React.PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context);
    this.state = this.getStateFromStores();
  }

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        Hello, {this.state.text}!
      </div>
    );
  }

  handleClick() {
    this.context.flux.getActions('hello-world').say('there');
  }

  getStateFromStores() {
    return this.context.flux.getStore('hello-world').getState();
  }

  componentDidMount() {
    this.unsubscribe = this.context.flux.getStore('hello-world').listen(this.onChange.bind(this));
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onChange() {
    this.setState(this.getStateFromStores());
  }

}

export default HelloWorld
