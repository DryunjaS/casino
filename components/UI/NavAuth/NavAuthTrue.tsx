"use client"

import Link from "next/link"
import Image from 'next/image'
import styles from '@/components/UI/NavAuth/navauth.module.scss'
import store from '../../../store/store'
import { observer } from "mobx-react"
import { useSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"

const NavAuthTrue = () => {
    const session = useSession()
    console.log('session',session)
    const [name,setName] = useState<string | null | undefined>(null)
    const [imgs,setImg] = useState<string | null | undefined>(null)
    useEffect(()=>{
        if(session.status === 'authenticated'){
          setName(session.data.user?.name)
          setImg(session.data.user?.image)
        }else{
          setName(null)
          setImg(null)
        }
      },[session])
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
            <div className={styles.balans}>{store.balans}</div>
        </div>
        <Link href="/profile" className={styles.user}>
            <div className={styles.userText}>{name}</div>
            <Image
                src={imgs ?? "/imgUser.png"}
                width={55}
                height={55}
                alt="imgUser"
                className={styles.imgUser}
            />
        </Link>
        <Image
            src="/imgOut.png"
            width={55}
            height={55}
            alt="imgOut"
            onClick={()=>signOut({callbackUrl:'/'})}
            className={styles.imgOut}
        />    
    </div>
            
  )
}

export default observer(NavAuthTrue)