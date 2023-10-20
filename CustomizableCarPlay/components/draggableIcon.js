import React, { useRef, useState } from "react";
import { Image, PanResponder, View, Animated } from "react-native";

// component to accept a prop which is an image source
const DraggableIcon = ({ source }) => {
  // useRef to prevent excessive re-renders during animation
  const pan = useRef(new Animated.ValueXY()).current;
  // create new PanResponder instance for touch events
  const panResponder = PanResponder.create({
    // recognize movement when user touches element
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: () => {
      pan.flattenOffset();
    },
    // set offset to new value so source doesnt go back to original location
    onPanResponderGrant: () => {
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      // start value
      pan.setValue({ x: -100, y: -100 });
    },
  });

  return (
    <Animated.View {...panResponder.panHandlers} style={pan.getLayout()}>
      <Image source={source} style={{ width: 50, height: 50 }} />
    </Animated.View>
  );
};
export default DraggableIcon;
