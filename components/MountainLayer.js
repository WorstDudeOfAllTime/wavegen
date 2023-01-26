import { useEffect, useState } from 'react';
const MountainLayer = ({ innerHeight, innerWidth }) => {
  const [xCordOne, setXCordOne] = useState(
    Math.floor(Math.random() * (innerWidth / 2))
  );
  const [xCordTwo, setXCordTwo] = useState(
    Math.floor(Math.random() * (innerWidth / 2 + 200))
  );
  const [xCordThree, setXCordThree] = useState(
    Math.floor(Math.random() * (innerWidth / 2))
  );
  const [yCordOne, setYCordOne] = useState(
    Math.floor(Math.random() * (innerHeight / 2))
  );
  return (
    <svg
      style={{
        zIndex: '18',
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      <polygon
        points={`${Math.floor(
          Math.random() * (innerWidth / 2)
        )}, ${innerHeight} ${Math.floor(
          Math.random() * (innerWidth / 2 + 200)
        )}, ${innerHeight} ${Math.floor(
          Math.random() * (innerWidth / 2)
        )}, ${Math.floor(Math.random() * (innerHeight / 1.5))}`}
        fill="white"
      ></polygon>
    </svg>
  );
};

export default MountainLayer;
