import React from "react";
import {Provider} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import {Container} from "native-base";

import {configureStore, configureRoutes} from "./src";

const store = configureStore();
const Routes = configureRoutes();

export default () => (
  <Provider
    store={store}
  >
    <Container>
      <NavigationContainer
      >
        <Routes />
      </NavigationContainer>
    </Container>
  </Provider>
);


//import Propeteer from "propeteer";
//import CustomFontsProvider, {useCustomFont} from "react-native-custom-fonts";
//import UriBox from "react-native-uri-box";
//import {Text, View, StyleSheet} from "react-native";
//
//const fontFaces = {
//  UbuntuBold: {
//    uri: 'https://github.com/google/fonts/raw/master/ufl/ubuntu/Ubuntu-Bold.ttf',
//    fontFamily: 'Ubuntu',
//    fontWeight: 'bold',
//    // XXX: You can also specify additional font styling.
//    color: 'blue',
//  },
//};
//
//const SomeComponent = () => {
//  // Fetch the desired font by name. When the font has been cached, it will automatically update the View.
//  const {...fontProps} = useCustomFont('UbuntuBold');
//  return (
//    <Text
//      {...fontProps}
//      children="Hello, world!"
//    />
//  );
//};
//
//const App = () => (
//  <CustomFontsProvider
//    fontFaces={fontFaces}
//  >
//    <Propeteer
//      LookUpTable={{
//        View,
//      }}
//      children={{
//        _: "View",
//        style: {
//          flex: 1,
//          backgroundColor: "red",
//        },
//      }}
//    />
//    <SomeComponent />
//    <UriBox
//      source={{uri: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png"}}
//    />
//  </CustomFontsProvider>
//);
//
//export default App;
