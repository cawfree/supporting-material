import React from "react";
import PropTypes from "prop-types";
import {StyleSheet} from "react-native";
import {Button} from "native-base";

const styles = StyleSheet.create({
  container: {height: 100, paddingBottom: 20},
});

const BigButton = ({style, ...extraProps}) => (
  <Button
    style={[styles.container, style]}
    primary
    full
    {...extraProps}
  />
);

BigButton.propTypes = Button.propTypes;
BigButton.defaultProps = Button.defaultProps;

export default BigButton;
