import React, { useRef, useEffect } from "react";
import { Image, PanResponder, View, Animated } from "react-native";

const DraggableIcon = ({ source, initialPosition = { x: 0, y: 0 } }) => {
  const pan = useRef(new Animated.ValueXY()).current;

  useEffect(() => {
    pan.setValue(initialPosition);
  }, []);
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
      pan.setValue({ x: 0, y: 0 }); // Reset the pan value
    },
  });

  return (
    <Animated.View {...panResponder.panHandlers} style={pan.getLayout()}>
      <Image source={source} style={{ width: 50, height: 50 }} />
    </Animated.View>
  );
};
export default DraggableIcon;
