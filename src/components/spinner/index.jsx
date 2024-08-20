"use client"
import React, { useContext } from 'react'
import styles from "./styles.module.scss"
import LevelContext from '@/context/LevelContext';
import Image from 'next/image';
import bounce from "/public/assets/bounce-load.gif"

const Spinner = () => {
const { isLoading } = useContext(LevelContext);
  return (
    <>
    {isLoading && <div className={styles.wrapper}>
      <Image src={bounce} alt='bouce load' />
    </div>}
    </>
  )
}

export default Spinner
