"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import styles from '@/components/Roulette/roulette.module.scss';
import Srcoll from '../UI/Scroll/Srcoll';

const Roulette = () => {
  const wheelImgRef = useRef<HTMLImageElement | null>(null);
  const [currentLength, setCurrentLength] = useState<number>(((1 / 37) * 360) / 2);
  const [currentBlur, setcurrentBlur] = useState<number>(0);
  const [currentCell, setCurrentCell] = useState<number | null>(null) // ответ на рулетку
  const [handleBtn,setHandleBtn] = useState<boolean>(false) //Выбор ячеуки - отбражает ячейки
  const [isBtn,setIsBtn] = useState<boolean>(true) //Выбор ячеуки - кнопка изначально отображается
  const [isYes, setIsYes] = useState<boolean>(false)
  const [isNo, setIsNo] = useState<boolean>(false)
  const [userNum,setUserNum] = useState<number | null>(null)//то что выбрал пользователь

  const onHandleBtn = ():void =>{
    setHandleBtn(!handleBtn)
    setIsBtn(false)
  }
  const onHandleYes = ():void=>{
    setIsYes(false)
    setIsNo(false)
    setIsBtn(false)
    setHandleBtn(false)
    onSpin()
  }
  const onHandleNo = ():void=>{
    setIsYes(false)
    setIsNo(false)
    setIsBtn(false)
    setHandleBtn(true)
  }
  const userCheck = (num:number)=>{
    setIsYes(true)
    setIsNo(true)
    setUserNum(num)
  }
  const order = [26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32, 0];

  const getCellNumber = (degrees:number) => {
    const normalizedDegrees = (degrees % 360 + 360) % 360; // Нормализация отрицательных значений
    const cellDegrees = 360 / order.length;
    const cellNumber = Math.floor(normalizedDegrees / cellDegrees);
    return order[cellNumber-1];
  };
  const cellDegrees = 360 / 37;

  function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const onSpin = () => {
  setcurrentBlur(8);
  const spinInterval = getRandomInt(0, order.length - 1) * cellDegrees + getRandomInt(3, 4) * 360;
  setCurrentLength(currentLength + spinInterval);

  setTimeout(()=>{
    setIsBtn(true) // отображаю кнопку для выблра ячеек
  },10000)

  setTimeout(() => {
    setcurrentBlur(0);
    const totalDegrees = currentLength + spinInterval;

    // Определить номер ячейки с учетом порядка
    const cellNumber = getCellNumber(totalDegrees);
    setCurrentCell(cellNumber);
  }, spinInterval);
};

  return (
    <div className={styles.roulette}>
      <div className={`${styles.wheel} ${styles.spin}`}>
        <div className={styles.arrow}></div>
        <Image
          src="/jackpot-game.png"
          width={500}
          height={500}
          alt="jackpot"
          ref={wheelImgRef}
          style={{
            transform: `rotate(${currentLength}deg)`,
            filter: `blur(${currentBlur}px)`,
          }}
        />
      </div>

      { 
        isBtn && <button 
        className={styles.btn}
        onClick={onHandleBtn}>Выбор ячейки</button>
      }  
      <div className="ifGameUser">
      {
        isYes && <button 
        className={styles.yesBtn}
        onClick={onHandleYes}>Сыграть</button>
      }
      {
        isNo && <button 
        className={styles.noBtn}
        onClick={onHandleNo}>Отменить</button>
      }
      </div>

      {handleBtn && <Srcoll returnNum={userCheck}/>}

      {currentCell !== null 
      && <p className={styles.numCell}>Рулетка остановилась на ячейке {currentCell}</p>}
      {userNum !== null 
      && <p className={styles.numCell}>Пользователь выбрал {userNum}</p>}
    </div>
  );
};

export default Roulette;
