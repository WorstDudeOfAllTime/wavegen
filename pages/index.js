import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import randomHexColor from 'random-hex-color';
import Wave from 'react-wavify';
import { useEffect, useState } from 'react';
import Sky from '@/components/Sky';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [innerHeight, setInnerHeight] = useState(null);
  const [innerWidth, setInnerWidth] = useState(null);
  const [points, setPoints] = useState(Math.floor(Math.random() * 10));
  const [height, setHeight] = useState(
    Math.floor(Math.random() * (43 - 25 + 1) + 25)
  );
  useEffect(() => {
    setInnerHeight((prevHeight) => {
      return window.innerHeight;
    });
    setInnerWidth((prevWidth) => {
      return window.innerWidth;
    });
  }, []);

  return (
    <div className={styles.siteContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {points != null && height != null ? (
          <>
            <Wave
              fill={`url(#gradient)`}
              strokeWidth={3}
              paused={false}
              options={{
                height: 10,
                amplitude: 25,
                speed: 0.42,
                points: `${points}`,
              }}
              style={{
                position: 'absolute',
                width: '100%',
                height: `${height}%`,
                opacity: '1',
                zIndex: '20',
                bottom: '0',
                left: '0',
                filter: `drop-shadow(0px -20px 10px 
        ${randomHexColor()}) drop-shadow(0px -20px 10px 
          ${randomHexColor()}) drop-shadow(0px -20px 10px 
            ${randomHexColor()})`,
              }}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#d4af37" />
                  <stop offset="90%" stopColor="#f00" />
                </linearGradient>
              </defs>
            </Wave>
            <Wave
              fill={randomHexColor()}
              paused={false}
              options={{
                height: 20,
                amplitude: 22,
                speed: 0.35,
                points: 4,
              }}
              style={{
                marginTop: '200',
                position: 'absolute',
                width: '110%',
                height: '25%',
                opacity: '.8',
                zIndex: '22',
                bottom: '0',
                filter: 'hue-rotate(90deg) saturate(30%)',
              }}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#d4af37" />
                  <stop offset="90%" stopColor="#f00" />
                </linearGradient>
              </defs>
            </Wave>
            <Wave
              fill={randomHexColor()}
              paused={false}
              options={{
                height: 20,
                amplitude: 22,
                speed: 0.35,
                points: 4,
              }}
              style={{
                position: 'absolute',
                width: '110%',
                height: '14%',
                opacity: '.5',
                zIndex: '22',
                bottom: '0',
                filter: 'hue-rotate(90deg) saturate(30%);',
              }}
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="10%" stopColor="#d4af37" />
                  <stop offset="90%" stopColor="#f00" />
                </linearGradient>
              </defs>
            </Wave>
          </>
        ) : (
          <h1>.....LOADING</h1>
        )}

        <Sky innerWidth={innerWidth} innerHeight={innerHeight}></Sky>
      </main>
    </div>
  );
}
