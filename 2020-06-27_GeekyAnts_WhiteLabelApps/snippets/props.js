export default `
import React from "react";
import {View, Text, StyleSheet} from "react-native";
import UriBox from "react-native-uri-box";
import Propeteer from "propeteer";

export default () => (
  <Propeteer
    LookUpTable={{
      View,
      Text,
      UriBox,
      //... Redux Connected Components? App Navigators?
    }}
    children={{
      _: "View",
      style: [
        {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "skyblue",
          alignItems: "center",
          justifyContent: "center",
        },
      ],
      $: [
        {
          _: "Text",
          children: "Hello, world!",
        },
        {
          _: "UriBox",
          style={{
            width: "100%",
            minHeight: 100,
          }}
          resizeMode="cover"
          source: {
            uri: "https://unsplash.it/2000/1000",
          },
        },
      ],
    }}
  />
);
`.trim();
