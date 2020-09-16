import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default function SomeComponent({ size, style }): JSX.Element {
  const [disabled, setDisabled] = useState(false);
  return (
    <View style={[
      styles.container,
      StyleSheet.flatten([...style]),
      {
        width: size,
        height: size,
        backgroundColor: disabled ? "black" : "white",
      },
    ]}>
      <Text>Universal React with Expo</Text>
    </View>
  );
}
