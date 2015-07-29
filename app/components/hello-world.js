import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import HelloWorldStore from '../stores/hello-world';
import helloWorldActions from '../actions/hello-world';

@connectToStores
class HelloWorld extends React.Component {

  static getStores() {
    return [HelloWorldStore];
  }

  static getPropsFromStores() {
    return HelloWorldStore.getState();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        Hello, {this.props.text}!
      </div>
    );
  }

  handleClick() {
    helloWorldActions.say('there');
  }

}

export default HelloWorld
