export default `
import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "green",
  },
});

export default () => (
  <div className={css(styles.container)} />
);
`;
