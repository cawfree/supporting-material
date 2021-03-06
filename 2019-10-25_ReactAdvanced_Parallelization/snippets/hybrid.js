module.exports = `
import React from 'react';
import { Alert } from 'react-native';
import NodeJsBridge from 'nodejs-mobile-react-native-bridge';

// <project_root>/HybridExample.js
export default class HybridExample extends React.Component {
  onHandleBridge = ({ doSomethingIntense }) => this.setState(
    {
      doSomethingIntense,
    },
    () => doSomethingIntense()
      .then(res => Alert.alert(JSON.stringify(res))),
  );
  render() {
    return (
      <NodeJsBridge
        script="index.js"
        onHandleBridge={this.onHandleBridge}
      />
    );
  }
}

// <project_root>/nodejs-assets/nodejs-project/index.js
module.exports = {
  // XXX: Note all of your exported functions become
  //      promisified when called via the bridge.
  doSomethingIntense: (...args) => {
    /** TODO: Intense logic here! 🎉 */
    return {};
  },
};
`;
