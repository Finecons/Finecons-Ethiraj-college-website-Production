import React from 'react';
import { useSpring, animated } from 'react-spring';

const AnimatedValue = ({ value, duration = 500 }) => {
  // Use useSpring to animate the passed value
  const animatedValue = useSpring({
    from: { value: 0 },
    value: value || 0,
    config: { duration },
  });

  return <animated.div>{animatedValue.value.to((val) => Math.floor(val))}</animated.div>;
};

export default AnimatedValue;
