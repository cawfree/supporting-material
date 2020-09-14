import React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  webview: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: "green",
        }}
      />
    </View>
  );
}
