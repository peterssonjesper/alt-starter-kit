import React from 'react';

let connectToStores = function (...stores) {

  return function (Component) {

    class StoreConnection extends React.Component {

      constructor(props, context) {
        super(props, context);
        this.state = this.getStateFromStores();
      }

      static contextTypes = {
        flux: React.PropTypes.object.isRequired
      }

      getStateFromStores() {
        var state = {};
        stores.forEach((store) => {
          state[store] = this.context.flux.getStore(store).getState();
        });
        return state;
      }

      componentDidMount() {
        this.storeListeners = stores.map((store) => {
          return this.context.flux.getStore(store).listen(this.onChange.bind(this));
        });
      }

      componentWillUnmount() {
        this.storeListeners.forEach((unlisten) => {
          unlisten();
        });
      }

      onChange() {
        this.setState(this.getStateFromStores());
      }

      render() {
        return <Component {...this.props} {...this.context} stores={this.state} />;
      }

    }

    return StoreConnection;

  };

};

export default connectToStores;
