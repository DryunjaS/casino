"use client"

import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from '@/components/Roulette/roulette.module.scss';

const Roulette = () => {
  const wheelImgRef = useRef<HTMLImageElement | null>(null);
  const [currentLength, setCurrentLength] = useState<number>(((1 / 37) * 360) / 2);
  const [currentBlur, setcurrentBlur] = useState<number>(0);

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onSpin = () => {
    setcurrentBlur(8);
    const spinInterval = getRandomInt(0, 37) * (360 / 37) + getRandomInt(3, 4) * 360;
    setCurrentLength(currentLength + spinInterval);

    setTimeout(() => {
      setcurrentBlur(0);
    }, spinInterval);
  };

  return (
    <div className={styles.roulette}>
      <div className={`${styles.wheel} ${styles.spin}`} onClick={onSpin}>
        <div className={styles.arrow}></div>
        <Image
          src="/jackpot-game.png"
          width={600}
          height={600}
          alt="jackpot"
          ref={wheelImgRef}
          style={{
            transform: `rotate(${currentLength}deg)`,
            filter: `blur(${currentBlur}px)`,
          }}
        />
      </div>
    </div>
  );
};

export default Roulette;
