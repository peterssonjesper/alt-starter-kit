import React from 'react';
import connectToStores from '../utils/connect-to-stores'

@connectToStores('hello-world')
class HelloWorld extends React.Component {

  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>
        Hello, {this.props.stores['hello-world'].text}!
      </div>
    );
  }

  handleClick() {
    this.props.flux.getActions('hello-world').say('there');
  }

}

export default HelloWorld
