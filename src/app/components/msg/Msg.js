import React from 'react'
import classes from './msg.module.css';

export default function Msg({children}) {
  return (
    <div className={classes.main}>
      <div className={classes.content}>
      <p>{children}</p>
    </div>
    </div>
  )
}
