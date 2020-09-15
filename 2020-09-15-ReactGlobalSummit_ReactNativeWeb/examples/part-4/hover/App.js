import React, { useState, useRef, useCallback, useEffect } from "react";
import { Platform, StyleSheet, TouchableOpacity, View, Text } from "react-native";

const withHover = Component => ({ style, ...extraProps }) => {
  const [active, setActive] = useState(false);

  const onMouseEnter = useCallback(() => setActive(true), [setActive]);
  const onMouseLeave = useCallback(() => setActive(false), [setActive]);

  const { active: activeStyles, ...extraStyles } = StyleSheet.flatten(style);

  if (Platform.OS === "web") {
    return (
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Component
          style={StyleSheet.flatten([extraStyles, (!!active) && activeStyles].filter(e => !!e))}
          {...extraProps }
        />
      </div>
    );
  }
  return <Component style={extraStyles} {...extraProps } />;
};

const HoverTouchableOpacity = withHover(TouchableOpacity);

export default function App() {
  return (
    <View
      style={{ 
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HoverTouchableOpacity
        style={{ active: { backgroundColor: "blue" } }}
      >
        <Text children="Hover!" />
      </HoverTouchableOpacity>
    </View>
  );
}
