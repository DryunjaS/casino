"use client"

import styles from '@/components/Header/header.module.scss'
import { useEffect, useState } from "react"
import NavAuthFalse from "../UI/NavAuth/NavAuthFalse"
import NavAuthTrue from '../UI/NavAuth/NavAuthTrue'
import { useSession } from 'next-auth/react'
export const Header = () => {
    const [isAuth,setIsAuth] = useState<boolean>(false)

    const session = useSession()
    useEffect(()=>{
      if(session.status === 'authenticated'){
        setIsAuth(true)
      }else{
        setIsAuth(false)
      }
    },[session])
  return (
    <div className={styles.header}>
        { isAuth ? <NavAuthTrue /> : <NavAuthFalse/> }
    </div>
  )
}
