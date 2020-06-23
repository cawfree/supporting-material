import React from "react";
import PropTypes from "prop-types";
import {View, StyleSheet, SafeAreaView} from "react-native";
import {Text} from "native-base";
import {BigButton} from "../../components";

import {Syntax} from "../../syntax";

const code = `
/* The CustomFontsProvider enables dynamic fonts to be
 * downloaded and consumed by the app at runtime. */

import React from "react";
import {Text} from "native-base";
import CustomFontsProvider, {useCustomFont} from "react-native-custom-fonts";

const fontFaces = Object.freeze({
  UbuntuBold: {
    uri: 'https://github.com/google/fonts/raw/master/ufl/ubuntu/Ubuntu-Bold.ttf',
    fontFamily: 'Ubuntu',
    fontWeight: 'bold',
  },
});

const UbuntuText = ({style, ...extraProps}) => {
  const {fontStyle, ...fontProps} = useCustomFont("UbuntuBold");
  return (
    <Text
      style={[fontStyle, style]}
      {...fontProps}
      {...extraProps}
    />
  );
};

export default () => (
  <CustomFontsProvider
    fontFaces={fontFaces}
  >
    <UbuntuText
      children="Hello, world!"
    />
  </CustomFontsProvider>
);
`.trim();

const Font = ({...extraProps}) => (
  <View
    style={[StyleSheet.absoluteFill]}
  >
    <Syntax
      code={code}
      fontSize={20}
    />
    <BigButton
    >
      <Text
        children="Launch"
      />
    </BigButton>
  </View>
);

Font.propTypes = {};
Font.defaultProps = {};

export default Font;
