import React from "react";
import PropTypes from "prop-types";
import {View, StyleSheet, SafeAreaView} from "react-native";
import {Text} from "native-base";
import {BigButton} from "../../components";

import {Syntax} from "../../syntax";

const code = `
import React from "react";
import UriBox, {LookUpTable} from "react-native-uri-box";
import SvgUri from "react-native-svg-uri";
//import Video from "react-native-video";

export default props => (
  <UriBox
    {...props}
    LookUpTable={{
      ...LookUpTable,
      ["xml/svg"]: SvgUri,
      //["video/mp4"]: Video,
    }}
  />
);
`.trim();

const Uri = ({...extraProps}) => (
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

Uri.propTypes = {};
Uri.defaultProps = {};

export default Uri;
