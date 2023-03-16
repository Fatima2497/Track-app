"use client"

import React, { useRef } from 'react'
import { Navbar } from '../components/layout/Navbar'
import Button from '../components/ui/button/Button'
import Input from '../components/ui/Input'
import style from './login.module.css'
import Link from 'next/link'
import { POST } from '../api/item/route'
import { useRouter } from 'next/navigation';


export default function Login() {

  const router = useRouter();
  const email = useRef();
  const password = useRef();

  const login = async() => {
    const data={
      email:email.current.value,
      password:password.current.value
    }
     if(email.current.value == "" || password.current.value == "") {
       alert('All Felids are Required')
    }else{
      const result = await POST(data)
      if(!result){
        alert('Invalid Credentials')
       }else {
        alert('You Are Logged In')
        router.push("/addExercise")
        
       }
      
   }

    
    
  }
  return (
    <>
      <Navbar />
      <div className={style.formgroup}>
        <h1>Login Form</h1>
        <form className={style.form}>
          <Input type='email' placeholder='Enter Email' inputRef={email} />
          <Input type='password' placeholder='Enter Password' inputRef={password} />
        </form>
        <div className={style.content}>
            <p className={style.text}>Create Account <span> <Link href='/register' className={style.link}>Sign up</Link> </span></p>
            <Button onClick={login}>Login</Button>
          </div>
      </div>
    </>
  )
}
