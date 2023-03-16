"use client"
import React, { useEffect, useRef, useState } from 'react'
import { Navbar } from '../components/layout/Navbar'
import style from './add.module.css'
import Input from '../components/ui/Input'
import Button from '../components/ui/button/Button'
import Label from '../components/label/Label'
import { POST } from '../api/user/route'
import { useRouter } from 'next/navigation';


export default function AddExercise() {
  const router = useRouter();

  const [activity_types,setActivity] = useState('') 
  const [initialRender, setInitialRender] = useState(false)

  useEffect(()=>{
    if (!localStorage.getItem('token')) {
      router.push("/login")
    }else{
      setInitialRender(true)
    }
  })
  const names = useRef()
  const descriptions = useRef() 
  const durations = useRef() 
  const dates = useRef()

  const handleChange = (e) => {
    setActivity(e.target.value);
  };
  const add = async()=>{
    const t = localStorage.getItem('token')
    const data={
      data:{
      name: names.current.value,
      description: descriptions.current.value,
      duration: durations.current.value, 
      activity_type: activity_types,
      date: dates.current.value,
      },
      token: t
    }

    console.log(data)

    if(names.current.value == '' || descriptions.current.value == '' || durations.current.value == ''  || dates.current.value == ''){
      alert('All Felids are required')
    }
    const result = await POST(data)
    router.push("/about")
    
    
  }
  if (!initialRender) {
    return null
  }
  return (
    <>
    <Navbar />
    <div className={style.formGroup}>
        <h1>Add Exercise</h1>
        <form className={style.form}>
          <Label htmlFor='name'>Name:</Label>
          <Input type='text' placeholder='Name' inputRef={names} />
          <Label className={style.label} htmlFor='description'>Description:</Label>
          <Input type='text' placeholder='Description' inputRef={descriptions} />
          <Label htmlFor='duration'>Duration:</Label>
          <Input type='text' placeholder='Duration & It must be in number' inputRef={durations} />
          <Label className={style.label} htmlFor='date'>Date:</Label>
          <Input type='date' placeholder='Date' inputRef={dates} />
          <Label className={style.label} htmlFor='type'>ActivityType:</Label>
          <select name="activity" id="" className={style.formSelect} onChange={handleChange}> 
            <option value="run">Run</option>
            <option value="bicycle">Bicycle</option>
            <option value="swim">Swim</option>
            <option value="walk">Walk</option>
            <option value="hike">Hike</option>
          </select>
        </form>
        <div>
            <Button onClick={add}>Add Exercise</Button>
          </div>
          
      </div>
    </>
  )
}
