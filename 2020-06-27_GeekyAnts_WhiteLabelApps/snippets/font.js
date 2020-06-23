export default `
import React from "react";
import PropTypes from "prop-types";
import {Text} from "native-base";
import CustomFontsProvider from "react-native-custom-fonts";
import {useCustomFont} from "react-native-custom-fonts";

const fontFaces = {
  H1: {
    uri: "https://.../Ubuntu-Bold.ttf",
    fontFamily: "Ubuntu",
    fontWeight: "bold",
    color: "blue",
  },
};

const H1 = ({style, ...extraProps}) => {
  const {style: fontStyle, ...fontProps}
    = useCustomFont('H1');
  return (
    <Text
      {...extraProps}
      style={[fontStyle, style]}
      {...fontProps}
    />
  );
};

export default () => (
  <CustomFontsProvider
  >
    <H1
      children="I am a heading!"
    />
  </CustomFontsProvider>
);

`.trim();
