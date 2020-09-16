import * as React from "react";
import { Image, View, Text } from "react-native";
import { SvgUri } from "react-native-svg";

// 

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <SvgUri
        width={100}
        height={100}
        uri="https://www.getuni.app/static/media/logo.f5a08cbc.svg"
      />
      <Text>Universal React with Expo</Text>
    </View>
  );
}













//import { SvgUri } from "react-native-svg";
//<SvgUri
//        width="100"
//        height="100"
//        uri="https://www.getuni.app/static/media/logo.f5a08cbc.svg"
//      />
