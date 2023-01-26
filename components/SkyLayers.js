import BackgroundLayer from './BackgroundLayer';
import Gradient from 'javascript-color-gradient';
import randomHexColor from 'random-hex-color';
import LineLayer from './LineLayer';
const SkyLayers = ({ innerHeight, innerWidth }) => {
  const gradientArray = new Gradient()
    .setColorGradient(randomHexColor(), randomHexColor())
    .getColors();
  const gradientArrayOne = new Gradient()
    .setColorGradient(randomHexColor(), randomHexColor())
    .getColors();
  const gradientArrayTwo = new Gradient()
    .setColorGradient(randomHexColor(), randomHexColor())
    .getColors();
  const gradientArrayWaveOne = new Gradient()
    .setColorGradient(randomHexColor(), randomHexColor())
    .getColors();
  const gradientArrayWaveTwo = new Gradient()
    .setColorGradient(randomHexColor(), randomHexColor())
    .getColors();

  return (
    <>

      <BackgroundLayer
        deg={Math.floor(Math.random() * 360)}
        opacity={0.35}
        zIn={2}
        linearGradient={gradientArray.join()}
      />
      <BackgroundLayer
        deg={Math.floor(Math.random() * 360)}
        opacity={0.35}
        zIn={3}
        linearGradient={gradientArrayOne.join()}
      />
      <BackgroundLayer
        deg={Math.floor(Math.random() * 360)}
        opacity={0.35}
        zIn={4}
        linearGradient={gradientArrayTwo.join()}
      />
    </>
  );
};
export default SkyLayers;
