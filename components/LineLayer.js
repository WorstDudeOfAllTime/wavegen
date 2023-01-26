import { useEffect, useState } from 'react';
const LineLayer = ({ innerHeight, innerWidth }) => {
  const [skyBars, setSkyBars] = useState(null);
  const [rain, setRain] = useState(false);
  const colorArr = ["black", "white", "red"]
  useEffect(() => {
    let thisArray = [];
    for (let i = 0; i <= innerWidth; i++) {
      if (i % Math.floor(Math.random() * 200) === 0) {
        thisArray.push([(i + 15), 0, (i - 15), innerHeight]);
      }
      if(i >= innerWidth){
        setRain(!rain);
      }
    }
    setSkyBars((prev) => {
      return thisArray;
    });
  }, [rain]);
  return (
    <svg
      style={{
        zIndex: '15',
        position: 'absolute',
        height: '100%',
        width: '100%',
      }}
    >
      {skyBars &&
        skyBars.map((bars) => {
          return (
            <line
              stroke={colorArr[Math.floor(Math.random() * (colorArr.length-1))]}
              strokeWidth="2"
              strokeDasharray={8}
              x1={bars[0]}
              y1={bars[1]}
              x2={bars[2]}
              y2={bars[3]}
              opacity={.4}
              style={{filter: 'blur(1px) drop-shadow(1px 1px 1px yellow)'}}
            ></line>
          );
        })}
    </svg>
  );
};
export default LineLayer;
