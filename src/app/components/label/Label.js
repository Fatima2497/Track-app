import React from 'react'
import style from './label.module.css'

export default function Label({id,children}) {
  return (
    <>
    <div className={style.main}>
    <label htmlFor={id} className={style.label}>{children}</label>
    </div>
    </>
  )
}
