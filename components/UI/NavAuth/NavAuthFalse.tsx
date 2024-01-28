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
                href="/api/auth/signin"
                className={styles.reg} >
                Войдите или зарегистрируйтесь
            </Link>
    </div>
            
  )
}

export default NavAuthFalse