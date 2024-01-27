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
            <div className={styles.wrapBtnReg}>
            <Link 
                href="/auth/reg"
                className={styles.reg} >
                SignIn
            </Link>
            <div className={styles.line}>или</div>
            <Link href="/api/auth/signin">
                <Image
                    className={styles.linkImg}
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
    </div>
            
  )
}

export default NavAuthFalse