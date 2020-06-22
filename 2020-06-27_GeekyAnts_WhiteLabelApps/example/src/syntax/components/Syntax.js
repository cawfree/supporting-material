import React from "react";
import PropTypes from "prop-types";
import SyntaxHighlighter from "react-native-syntax-highlighter";
import {darcula} from "react-syntax-highlighter/styles/hljs";

const Syntax = ({style, code}) => (
  <SyntaxHighlighter
    style={style}
  	language="javascript"
  	style={darcula}
  	highlighter={"hljs"}
    children={code}
  />
);

Syntax.propTypes = {
  style: PropTypes.shape({}),
  code: PropTypes.string.isRequired,
};

Syntax.defaultProps = {
  style: {},
};

export default Syntax;
