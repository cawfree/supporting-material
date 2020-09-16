import React, {useCallback, useState, useEffect} from 'react';
import { Animated, StyleSheet } from "react-native";
import Masonry from '@cawfree/react-native-masonry';
import somePrettyColor from "randomcolor";

export default () => {
  const createItems = useCallback(
    (numItems = 20) => [...Array(numItems)]
      .map(() => ({
        key: `${Math.random() + 0.1}`,
        opacity: new Animated.Value(0),
        backgroundColor: somePrettyColor(),
      })),
    [],
  );
  
  const [items, setItems] = useState(createItems);

  const renderItem = useCallback(
    ({ key, opacity, backgroundColor }) => (
      <Animated.View
        style={{
          flex: 1,
          height: key * 400,
          backgroundColor,
          opacity,
        }}
      />
    ),
    [],
  );

  const onItemPlaced = useCallback(
    ({ opacity }) => Animated.timing(
        opacity,
        { toValue: 1, duration: 1000, useNativeDriver: true },
      )
        .start(),
    [],
  );

  const onScroll = useCallback(
    ({ nativeEvent: { layoutMeasurement, contentOffset, contentSize } }) => {
      if ((layoutMeasurement.height + contentOffset.y) >= (contentSize.height - 600)) {
        setItems(items => [
          ...items,
          ...createItems(),
        ]);
      }
    },
    [createItems, setItems],
  );


  return (
    <Masonry
      style={StyleSheet.absoluteFill}
      items={items}
      renderItem={renderItem}
      onItemPlaced={onItemPlaced}
      onScroll={onScroll}
    />
  );
};
