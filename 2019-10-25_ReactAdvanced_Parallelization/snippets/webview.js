module.exports = `
import React from 'react';
import WebView from 'react-native-webview';

import Elsewhere from '@cawfree/react-native-elsewhere';

// XXX: Important! Relies upon .toString().
function doSomethingIntense(postMessage, message = {}) {
  // Your intense operation here!
  return postMessage(
    {},
  );
}

export default class WebViewExample extends React.Component {
  state = {
    postMessage: null,
  };
  onPostMessage = postMessage => this.setState(
    {
      postMessage,
    },
  );
  render() {
    return (
      <Elsewhere
        WebView={WebView}
        engine={doSomethingIntense}
        onMessage={message => Alert.alert(
          JSON.stringify(
            message,
          ),
        )}
        onPostMessage={this.onPostMessage}
      />
    );
  }
}
`;
