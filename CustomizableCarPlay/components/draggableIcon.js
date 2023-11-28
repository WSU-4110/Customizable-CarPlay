import React, { useRef, useEffect } from "react";
import { Image, PanResponder, View, Animated } from "react-native";

const DraggableIcon = ({
  source,
  initialPosition = { x: 0, y: 0 },
  onPress,
}) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const tapTime = useRef(new Date().getTime());
  const tapPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    pan.setValue(initialPosition);
  }, [initialPosition]);

  //determine if user taps or drags icon
  const isTapGesture = (dx, dy, duration) => {
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < 10 && duration < 200;
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (evt, gestureState) => {
      const duration = new Date().getTime() - tapTime.current;
      if (isTapGesture(gestureState.dx, gestureState.dy, duration)) {
        // call onPress if click is true
        onPress && onPress();
      }
      pan.flattenOffset();
    },
    onPanResponderGrant: () => {
      tapTime.current = new Date().getTime();
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
  });

  return (
    <Animated.View {...panResponder.panHandlers} style={pan.getLayout()}>
      <Image source={source} style={{ width: 50, height: 50 }} />
    </Animated.View>
  );
};

export default DraggableIcon;
