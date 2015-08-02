import React from 'react';
import HelloWorld from './hello-world';
import withAltContext from 'alt/utils/withAltContext'
import flux from '../core/flux';

@withAltContext(flux)
class App extends React.Component {

  render() {
    return <HelloWorld />;
  }

}

export default App;
