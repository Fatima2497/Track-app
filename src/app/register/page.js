"use client"

import React, { useRef } from 'react'
import { Navbar } from '../components/layout/Navbar'
import Button from '../components/ui/button/Button'
import Input from '../components/ui/Input'
import style from '../login/login.module.css'
import Link from 'next/link'
import { POST } from '../api/hello/route'
import { useRouter } from 'next/navigation';


export default function Register() {
  const router = useRouter();
  const fullName = useRef();
  const email = useRef();
  const password = useRef();

  // let mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const register = async() => {
    const data={
      fullName:fullName.current.value,
      email:email.current.value,
      password:password.current.value
    }
    
    if(fullName.current.value == '' || email.current.value == '' || password.current.value == ''){
      alert("All Felids Are required")
    }else if(email.current.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      alert("Email is invalid Please Enter at least One Capital letter, Number and special character like: * ")
    }else if(password.current.value.length < 6){
      alert("Password must be 6 words")
    }else{
      const result = await POST(data)

    }
      
      // router.push('/login')
    
  }
  return (
    <>
      <Navbar />
      <div className={style.formgroup}>
        <h1>Registration Form</h1>
        <form className={style.form}>
          <Input type='text' placeholder='Enter FullName' inputRef={fullName}  />
          <Input type='email' placeholder='Enter Email' inputRef={email}/> 
          <Input type='password' placeholder='Enter Password' inputRef={password} />
        </form>
        <div className={style.content}>
            <p className={style.text}>Already Have an Account? <span> <Link href='/login' className={style.link}>Login</Link> </span></p>
            <Button onClick={register}>Register</Button>
          </div>
      </div>
    </>

  )
}
