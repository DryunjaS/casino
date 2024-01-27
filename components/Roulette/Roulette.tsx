"use client"
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '@/components/Roulette/roulette.module.scss';
import Srcoll from '../UI/Scroll/Srcoll';

import store from '../../store/store';
import { observer } from 'mobx-react';

const Roulette = () => {
  const wheelImgRef = useRef<HTMLImageElement | null>(null);
  const [currentLength, setCurrentLength] = useState<number>(((1 / 37) * 360) / 2);
  const [currentBlur, setcurrentBlur] = useState<number>(0);
  const [currentCell, setCurrentCell] = useState<number>(0) // ответ на рулетку
  const [handleBtn,setHandleBtn] = useState<boolean>(false) //Выбор ячеуки - отбражает ячейки
  const [isBtn,setIsBtn] = useState<boolean>(true) //Выбор ячеуки - кнопка изначально отображается
  const [isYes, setIsYes] = useState<boolean>(false)
  const [isNo, setIsNo] = useState<boolean>(false)
  const [userNum,setUserNum] = useState<number[]>([])//то что выбрал пользователь
  const [stake,setStake] = useState<number>(0)//ставка пользователя

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
  const userCheck = (num:number[])=>{
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

    if(userNum.includes(currentCell)){
      switch (userNum.length) {
        case 1:
          store.StraightUp(stake)
          break;
        case 2:
          store.Split(stake)
          break;
        case 3:
          store.Street(stake)
          break;
        case 4:
          store.Corner(stake)
          break;
        case 12:
          store.Dozen(stake)
          break;
        case 17:
          store.EVENHANCES(stake)
          break;
        case 18:
          store.EVENHANCES(stake)
          break;
        case 19:
          store.EVENHANCES(stake)
          break;
        default:
          alert( "Нет таких значений" );
      }
    }
    else{
      store.loss(stake)
    }
  },10000)

  setTimeout(() => {
    setcurrentBlur(0);
    const totalDegrees = currentLength + spinInterval;
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
      {
        handleBtn && (
        <div className={styles.parlay}>
          <div className={styles.parlayText}>Ставка</div>
          <input 
            type="number" 
            className={styles.parlayInput}
            value={stake}
            onChange={(e)=>setStake(parseInt(e.target.value))}/>
        </div>
        )
      }
      {
        !handleBtn && (
          <div className={styles.comment}>
             {userNum.length === 1 ? <p>Ставка {stake}$ на ячейку: {userNum}</p> 
              : <p>Ставка {stake}$ на ячейки: {userNum.map(el=><span>{el}; </span>)}</p> }
          </div>
        )
      }
    </div>
  );
};

export default observer(Roulette);
