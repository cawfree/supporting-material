import React from "react";
import { Platform, SafeAreaView, View, StyleSheet } from "react-native";
//import { WebView } from "react-native-webview";
//import { WebView } from "react-native-web-webview";

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default function App() { 
  return (
    <View style={StyleSheet.absoluteFill}>
    </View>
  );
}



const Component = Platform.select({
  ios: require("react-native-webview").WebView,
  android: require("react-native-webview").WebView,
  web: require("react-native-web-webview").WebView,
});
