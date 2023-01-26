import Circle from './Circle';
import { useState, useEffect } from 'react';
const SunLayers = ({ innerHeight, innerWidth }) => {
  const [circleShow, setCircleShow] = useState(false);
  const [movePos, setMovePos] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const randomNum = Math.random();
      if (randomNum > 0.75) {
        setCircleShow(true);
      }
    }, 10000);
  }, []);
  return (
    <svg style={{zIndex:'16', height: '100%', width: '100%', background:'transparent', position:"absolute" }}>
      {circleShow && (
        <Circle
          setX={-100}
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          setCircleShow={setCircleShow}
          circleShow={circleShow}
        />
      )}
    </svg>
  );
};

export default SunLayers;
