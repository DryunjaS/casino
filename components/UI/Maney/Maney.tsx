'use client'

import Image from 'next/image'
import styles from '@/components/UI/Maney/maney.module.scss'
import { useState } from 'react'

const Maney = () => {

  const [money, setMoney] = useState<number>(89653100)

  const format = (num: number): string => {
    const s: string = `${num}`;
    const parts: string[] = s.split('.');
    
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    return parts.join('.');
};


  return (
    <div className={styles.wrapper}>
      <div 
        className={styles.gradient_border} 
        id={styles.box}>
        <div 
          className={styles.wrap}>
          <Image
            src="/money.png"
            width={100}
            height={100}
            alt="Общий счета"
            className={styles.logo}
          />  
          <div className={styles.bank}>{format(money)} ₽</div>  
        </div>
        
      </div>
    </div>
  )
}

export default Maney