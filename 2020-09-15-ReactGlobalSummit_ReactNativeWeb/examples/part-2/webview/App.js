import React from "react";
import { Platform, SafeAreaView, View, StyleSheet } from "react-native";


import WebView from "./WebView";

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default function App() { 
  return (
    <View style={StyleSheet.absoluteFill}>
      <WebView
        originWhitelist={["*"]}
        source={{
          html: `
<b> Hello! </b>
          `.trim(),
        }}
      />
    </View>
  );
}
