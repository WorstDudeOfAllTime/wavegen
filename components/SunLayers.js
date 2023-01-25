import Circle from './Circle';
import { useState, useEffect } from 'react';
const SunLayers = ({ innerHeight, innerWidth }) => {
  const [circleShow, setCircleShow] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const randomNum = Math.random();
      if (randomNum > 0.65) {
        setCircleShow(true);
      }
    }, 10000);
  }, []);
  return (
    <svg style={{height: '100%', width: '100%'}}>
      {circleShow && (
        <Circle
          setX={-100}
          setY={200}
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          setCircleShow={setCircleShow}
        />
      )}
    </svg>
  );
};

export default SunLayers;
