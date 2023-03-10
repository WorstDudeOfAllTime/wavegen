import { useEffect, useState } from 'react';
const Circle = ({
  setX,
  setY,
  innerWidth,
  innerHeight,
  setCircleShow,
  circleShow,
}) => {
  const [xPos, setXPos] = useState(setX);
  const [size, setSize] = useState(25);
  const [sizeAdd, setSizeAdd] = useState(1);
  const [movePos, setMovePos] = useState(0);
  useEffect(() => {
    if (xPos >= innerWidth + 150) {
      setCircleShow(false);
    }
  }, [xPos]);

  useEffect(() => {
    setTimeout(() => {
      setXPos((prev) => {
        return prev + 1;
      });
    }, 20);
  }, [xPos]);

  useEffect(() => {
    setTimeout(() => {
      if (size >= 45) {
        setSizeAdd(-1);
      } else if (size <= 25) {
        setSizeAdd(1);
      }
      setSize((prev) => {
        return prev + sizeAdd;
      });
    }, 50);
  }, [size]);

  useEffect(() => {
    setMovePos((prev) => {
      return Math.floor(Math.random() * innerHeight);
    });
  }, [circleShow]);

  return (
    <>
      <circle
        style={{ zIndex:'40', filter: 'blur(10px) drop-shadow(10px 10px 6px red)' }}
        cx={xPos.toString()}
        cy={movePos.toString()}
        r={String(size + 20)}
        stroke="yellow"
        fill="rgb(0,0,0)"
        strokeWidth={5}
      />
      <circle
        style={{ filter: 'blur(10px) drop-shadow(10px 10px 6px red)' }}
        cx={xPos.toString()}
        cy={movePos.toString()}
        r={String(size + 10)}
        stroke={'red'}
        strokeWidth={5}
      />
      <circle
        style={{
          zIndex: '50',
          filter: 'blur(15px) drop-shadow(10px 10px 9px red)',
        }}
        cx={xPos.toString()}
        cy={movePos.toString()}
        r={String(size)}
        fill="red"
      />
    </>
  );
};

export default Circle;
