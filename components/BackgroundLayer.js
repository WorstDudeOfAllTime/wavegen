const BackgroundLayer = ({opacity, linearGradient, zIn, deg}) => {
  return (
    <div style={{position: 'absolute', top:'0', left: '0', height: "100%", width: "100%", zIndex:`${zIn}`, opacity: `${opacity}`, background: `linear-gradient(${deg}deg, ${linearGradient})`}}></div>
  )
}

export default BackgroundLayer;