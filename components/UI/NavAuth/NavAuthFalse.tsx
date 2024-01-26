"use client"

import Link from "next/link"
import Image from 'next/image'
import styles from '@/components/UI/NavAuth/navauth.module.scss'

const NavAuthFalse = () => {
  return (    
    <div className={styles.nav}>
       <Link href="/">
                <div id={styles.text}>
                    <h1 className={styles.h1}>CA<span id="offset">SI</span>NO</h1>
                </div>
            </Link>
            <Link 
                href="/auth/reg"
                className={styles.reg} >
                Регистрация
            </Link>
            <Link 
                href="/auth/login"
                className={styles.log}>
                Вход
            </Link>
            <div className={styles.line}>или</div>
            <Link href="/">
                <Image
                    src="/google.png"
                    width={40}
                    height={40}
                    alt="Google"
                />
            </Link>
            <Link href="/">
                <Image
                    src="/vk.png"
                    width={40}
                    height={40}
                    alt="VK"
                />
            </Link>     
    </div>
            
  )
}

export default NavAuthFalse