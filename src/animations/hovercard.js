// /src/animations/hovercard.js

import { useSpring } from '@react-spring/three';



// Hook to handle hover and click animations
export const useHoverAndClick = (hovered, clicked, position = [0, 0, 0]) => {
  const { position: springPosition, scale, rotation } = useSpring({
    position: hovered
      ? [position[0], position[1], position[2] - 1] // Move the card closer when hovered
      : position, // Return to original position when not hovered
    scale: clicked ? [10.5, 10.5, 10.5] : [4, 4, 4], // Make card bigger when clicked
    rotation: clicked ? [0, Math.PI / 6, 0] : [0, 0, 0], // Rotate card when clicked
    config: { mass: 5, tension: 250, friction: 20 },
  });

  return { springPosition, scale, rotation };
};
