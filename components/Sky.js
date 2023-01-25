import Circle from './Circle';
import SunLayers from './SunLayers';
import SkyLayers from './SkyLayers';
const Sky = ({ innerHeight, innerWidth }) => {
  return (
    <div style={{height: '100%', width: '100%'}}>
      <SunLayers style={{zIndex: '25'}} innerHeight={innerHeight} innerWidth={innerWidth} />
      <SkyLayers />
    </div>
  );
};

export default Sky;
