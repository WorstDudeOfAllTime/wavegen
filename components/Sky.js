import Circle from './Circle';
import SunLayers from './SunLayers';
import SkyLayers from './SkyLayers';
import LineLayer from './LineLayer';
import MountainLayer from './MountainLayer';
const Sky = ({ innerHeight, innerWidth }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <SunLayers
        style={{ zIndex: '25' }}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
      />
      <SunLayers
        style={{ zIndex: '25' }}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
      />
      <SunLayers
        style={{ zIndex: '25' }}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
      />
      <LineLayer innerHeight={innerHeight} innerWidth={innerWidth} />
      <MountainLayer innerHeight={innerHeight} innerWidth={innerWidth} />
      <SkyLayers innerHeight={innerHeight} innerWidth={innerWidth} />
    </div>
  );
};

export default Sky;
