"use client"

import styles from '@/components/Header/header.module.scss'
import { useState } from "react"
import NavAuthFalse from "../UI/NavAuth/NavAuthFalse"
import NavAuthTrue from '../UI/NavAuth/NavAuthTrue'

export const Header = () => {
    const [isAuth,setIsAuth] = useState<boolean>(true)

  return (
    <div className={styles.header}>
        { isAuth ? <NavAuthTrue/> : <NavAuthFalse/> }
    </div>
  )
}
