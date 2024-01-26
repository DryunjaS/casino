import style from '@/components/UI/Scroll/scroll.module.scss'
import { useEffect, useState } from 'react';

const Srcoll = ({returnNum}: {returnNum: (num: number[]) => void}) => {
    const numbers = Array.from({ length: 37 }, (_, index) => index);
    const dozen1 = Array.from({ length: 12 }, (_, index) => index+1);
    const dozen2 = Array.from({ length: 12 }, (_, index) => index+13);
    const dozen3 = Array.from({ length: 12 }, (_, index) => index+25);
    const Even = numbers.filter((el)=>el % 2 === 0)
    const Odd = numbers.filter((el)=>el % 2 !== 0)
    const Black = [2,4,6,7,8,10,11,13,15,17,19,20,22,24,26,29,31,33,35]
    const Red = [1,3,5,9,12,14,16,18,21,23,25,27,28,30,32,34,36]
    const Arr1_18 = Array.from({ length: 18 }, (_, index) => index+1);
    const Arr19_36 =Array.from({ length: 18 }, (_, index) => index+19);

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
    const onCheckEvenOdd = (number: number) => { // выбор чёт, нечёт
        setIsDozen(number)

        if(number === 51) setIsNum(Even);
        if(number === 52) setIsNum(Odd);
    }
    const onCheckRedBlack = (number: number) => { // выбор черное, красное
        setIsDozen(number)

        if(number === 61) setIsNum(Red);
        if(number === 62) setIsNum(Black);
    }
    const onCheck1_18_19_36 = (number: number) => { // выбор черное, красное
        setIsDozen(number)

        if(number === 71) setIsNum(Arr1_18);
        if(number === 72) setIsNum(Arr19_36);
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

            <div 
                className={style.dozen}
                onClick={()=>onCheckEvenOdd(51)}
                style={isDozen === 51 ? {backgroundColor:'red', scale:1.1} : {}}>Even</div>
            <div 
                className={style.dozen}
                onClick={()=>onCheckEvenOdd(52)}
                style={isDozen === 52 ? {backgroundColor:'red', scale:1.1} : {}}>Odd</div>
            <div 
                className={style.dozen}
                onClick={()=>onCheckRedBlack(61)}
                style={isDozen === 61 ? {backgroundColor:'red', scale:1.1} : {}}
                >
                <div className={style.rhombRed}></div>
            </div>
            <div 
                className={style.dozen}
                onClick={()=>onCheckRedBlack(62)}
                style={isDozen === 62 ? {backgroundColor:'red', scale:1.1} : {}}
                >
                <div className={style.rhombBlack}></div>
            </div>
            <div 
                className={style.dozen}
                onClick={()=>onCheck1_18_19_36(71)}
                style={isDozen === 71 ? {backgroundColor:'red', scale:1.1} : {}}
                >1-18</div>
            <div 
                className={style.dozen}
                onClick={()=>onCheck1_18_19_36(72)}
                style={isDozen === 72 ? {backgroundColor:'red', scale:1.1} : {}}
                >19-36</div>
      </div>
    </div>
  )
}

export default Srcoll