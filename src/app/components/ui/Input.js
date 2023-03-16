import React from 'react'
import style from './input.module.css'
export default function Input(props) {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} ref={props.inputRef} className={style.input} required/>
    </>
  )
}

