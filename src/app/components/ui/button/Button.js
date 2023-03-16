import React from 'react'
import styles from './button.module.css'

export default function Button({ onClick, children }) {
  return (
    <>
    <button className={styles.btn} onClick={onClick}>{children}</button>
    </>
  )
}
