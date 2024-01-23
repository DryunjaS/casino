import style from '@/components/UI/Scroll/scroll.module.scss'
import { useState } from 'react';

const Srcoll = ({returnNum}: {returnNum: (num: number) => void}) => {
    const numbers = Array.from({ length: 33 }, (_, index) => index);
    const [isNum,setIsNum] = useState<number | null>(null)

    const onCheck = (number:number)=>{
        setIsNum(number)
        returnNum(number)
    }
  return (
    <div className={style.wrap}>
        <section className={style.scrollport}>
            {numbers.map((number) => (
                <div 
                    key={number}
                    className={style.block}
                    // onClick={()=>setIsNum(number)}
                    onClick={() => onCheck(number)}
                    style={isNum === number ? {backgroundColor:'red',scale:1.1}
                        : {}}>{number}</div>
            ))}
        </section>
    </div>
  )
}

export default Srcoll