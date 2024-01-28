"use client"

import styles from '@/components/Header/header.module.scss'
import { useEffect, useState } from "react"
import NavAuthFalse from "../UI/NavAuth/NavAuthFalse"
import NavAuthTrue from '../UI/NavAuth/NavAuthTrue'
import { useSession } from 'next-auth/react'
import store from '../../store/store';
import { observer } from 'mobx-react';

export const Header = observer(() => {

    const session = useSession()
    useEffect(()=>{
      if(session.status === 'authenticated'){
        store.isAuth = true
      }else{
        store.isAuth = false
      }
    },[session])
  return (
    <div className={styles.header}>
        { store.isAuth ? <NavAuthTrue /> : <NavAuthFalse/> }
    </div>
  )
})
