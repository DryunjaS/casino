"use client"

import Link from "next/link"
import Image from 'next/image'
import styles from '@/components/UI/NavAuth/navauth.module.scss'
import store from '../../../store/store'
import { observer } from "mobx-react"

const NavAuthTrue = () => {
  return (    
    <div className={styles.nav}>
       <Link href="/">
            <div id={styles.text}>
                <h1 className={styles.h1}>CA<span id="offset">SI</span>NO</h1>
            </div>
        </Link>
        <div className={styles.zero}></div>
        <div className={styles.balans}>
            <Image
                src="/money.png"
                width={50}
                height={50}
                alt="money"
                className={styles.imgBalans}
            />
            <div>{store.balans}</div>
        </div>
        <Link href="#" className={styles.user}>
            <div className={styles.userText}>Андрей</div>
            <Image
                src="/imgUser.png"
                width={50}
                height={50}
                alt="imgUser"
                className={styles.imgUser}
            />
        </Link>    
    </div>
            
  )
}

export default observer(NavAuthTrue)