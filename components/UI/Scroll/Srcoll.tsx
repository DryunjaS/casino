import style from '@/components/UI/Scroll/scroll.module.scss'
import { useEffect, useState } from 'react';

const Srcoll = ({returnNum}: {returnNum: (num: number[]) => void}) => {
    const numbers = Array.from({ length: 37 }, (_, index) => index);
    const dozen1 = Array.from({ length: 12 }, (_, index) => index+1);
    const dozen2 = Array.from({ length: 12 }, (_, index) => index+13);
    const dozen3 = Array.from({ length: 12 }, (_, index) => index+25);

    const [isNum,setIsNum] = useState<number[]>([])
    const [isDozen,setIsDozen] = useState<number | null>(null)


    const onCheckCell = (number: number) => { // выбор по одной ячейке
        const isNumberInArray = isNum.includes(number);
        setIsDozen(null)

        if (isNumberInArray) {
            const updatedArray = isNum.filter((num) => num !== number);
            setIsNum(updatedArray);
        } else {
            const updatedArray = [...isNum, number].slice(-4);
            setIsNum(updatedArray);
        }
    }
    const onCheckDozen = (number: number) => { // выбор по 12 ячеек
        setIsDozen(number)

        if(number === 41) setIsNum(dozen1);
        if(number === 42) setIsNum(dozen2);
        if(number === 43) setIsNum(dozen3);
    }
    useEffect(()=>{
        returnNum(isNum);
    },[isNum])
  return (
    <div className={style.wrap}>
        <section className={style.scrollport}>
        {numbers.map((number) => (
            <div 
                key={number}
                className={style.block}
                onClick={() => onCheckCell(number)}
                style={isNum.includes(number) ? {backgroundColor:'red', scale:1.1} : {}}
            >
                {number}
            </div>
        ))}
        </section>
        <div className={style.scrollportDop}>
            <div 
                className={style.dozen}
                onClick={() => onCheckDozen(41)}
                style={isDozen === 41 ? {backgroundColor:'red', scale:1.1} : {}}>
                1st Dozen</div>
            <div 
                className={style.dozen}
                onClick={() => onCheckDozen(42)}
                style={isDozen === 42 ? {backgroundColor:'red', scale:1.1} : {}}>
                2st Dozen</div>
            <div 
                className={style.dozen}
                onClick={() => onCheckDozen(43)}
                style={isDozen === 43 ? {backgroundColor:'red', scale:1.1} : {}}>
                3st Dozen</div>

            <div className={style.dozen}>Even</div>
            <div className={style.dozen}>Odd</div>
            <div className={style.dozen}>
                <div className={style.rhombRed}></div>
            </div>
            <div className={style.dozen}>
                <div className={style.rhombBlack}></div>
            </div>
            <div className={style.dozen}>1-18</div>
            <div className={style.dozen}>19-36</div>
      </div>
    </div>
  )
}

export default Srcoll