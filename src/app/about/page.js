"use client"
import React, { useEffect, useState, useRef} from 'react'
import { Navbar } from '../components/layout/Navbar'
import Input from '../components/ui/Input'
import Button from '../components/ui/button/Button'
import Label from '../components/label/Label'
import styles from './page.module.css'
import { DELETE, GET } from '../api/get/route'
import { PUT } from '../api/put/route'
import style from './modal.module.css'
import { useRouter } from 'next/navigation';


export default function About() {
  const router = useRouter();

  const [list, setList] = useState([])
  const [show, setShow] = useState(false) // popup for update 
  const [div, setDiv] = useState(false) // popup for delete
  const [activity_types,setActivity] = useState('') 
  const [id, setId] = useState()
  const [d, setD] = useState()
  const [initialRender, setInitialRender] = useState(false)

 
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push("/login")
    } else {

    getData()
 
    }
    
  }, [])

  async function  getData() {
    const tokenization = localStorage.getItem('token')
    const result = await GET(tokenization)
    setList(result)
    setD(result)
    setInitialRender(true)
  }

  const names = useRef()
  const descriptions = useRef() 
  const durations = useRef() 
  const dates = useRef()


  
  const handleChange = (e) => {
    setActivity(e.target.value);
  };

 

  const handleUpdate = (e) => {
    setShow(true)
    setId(e)
    
    console.log(e)
    console.log(d)
 

  }

  const handleDelete = (e) => {
    console.log("update from modal")
    setDiv(true)
    console.log(e)
    setId(e)
  }


  const update = async(e) => {
    e.preventDefault()
    console.log(id)
  

    const item = localStorage.getItem('token')
    console.log(item)

    const obj = {
      name: names.current.value,
      description: descriptions.current.value,
      duration: durations.current.value, 
      activity_type: activity_types,
      date: dates.current.value,
    }

    console.log(obj)

     const result = await PUT(item, id, obj)
     if(result){
       setShow(false)
      alert('updated')
     }else{
      alert('not updated')
     }

    getData()
  }

  const deleteData = async(e) => {
    e.preventDefault()
    console.log(id)
  

    const item = localStorage.getItem('token')
    console.log(item)

     const result = await DELETE(item, id)
     if(result){
       setDiv(false)
      alert('Deleted')
     }
    // console.log(result)

    getData()
  }

  if (!initialRender) {
    return null
  }
  return (
    <>
    <Navbar />
    <div className={styles.container}>
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      Details
    </div>
    <div className={styles.cardBody}>
     <div className={styles.row }>
      <table 
      className={styles.table}
      >
        <thead className={styles.thead}>
          <tr className={styles.main}>
            <th scope="col"className={styles.td}>Name</th>
            <th scope="col" className={styles.td}>Description</th>
            <th scope="col"className={styles.td}>Activity Type</th>
            <th scope="col"className={styles.td}>Duration</th>
            <th scope="col"className={styles.td}>Date</th>
            <th scope="col"className={styles.td}></th>
            <th scope="col"className={styles.td}></th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
         
            {list.map(track => {
              return (<>
              <tr className={styles.main} key={track.id}>
              <td className={styles.td} >{track.name}</td>
              <td className={styles.td} >{track.description} </td>
              <td className={styles.td} >{track.activity_type} </td>
              <td className={styles.td} >{track.duration} </td>
              <td className={styles.td} >{track.date} </td>       
              <td className={styles.td} ><button onClick={() => handleUpdate(track._id)} className={styles.btnEdit}>Edit</button> </td>       
              <td className={styles.td} ><button onClick={() => handleDelete(track._id)} className={styles.btnEdit}>Delete</button> </td>       
              </tr>    
              </>)
            })}
         
         
        </tbody>
      </table>
     </div>
    </div>
    <div className={styles.cardFooter}>
      Your Exercise Details
    </div>
  </div>
  {show ?
  <div className={style.formGroup}>
  <form className={style.form}>
          <Label htmlFor='name'>Name:</Label>
          <Input type='text' placeholder='Name' inputRef={names} />
          <Label className={style.label} htmlFor='description'>Description:</Label>
          <Input type='text' placeholder='Description' inputRef={descriptions} />
          <Label htmlFor='duration'>Duration:</Label>
          <Input type='text' placeholder='Duration' inputRef={durations} />
          <Label className={style.label} htmlFor='date'>Date:</Label>
          <Input type='date' placeholder='Date' inputRef={dates} />
          <Label className={style.label} htmlFor='type'>ActivityType:</Label>
          <select name="activity" id="" className={style.formSelect} onChange={handleChange}> 
            <option value="run" defaultValue='run'>Run</option>
            <option value="bicycle">Bicycle</option>
            <option value="swim">Swim</option>
            <option value="walk">Walk</option>
            <option value="hike">Hike</option>
          </select>
          <div className={style.content}>
            <Button onClick={()=> setShow(false)}>Close</Button>
            <Button onClick={update}>Update</Button>
          </div>
        </form></div>  : null
        
        
      }
  {
    
    
      div ?  <>
      <div className={style.deleteContent}>
       Are you sure To Delete?
      <button onClick={()=> setDiv(false)} className={styles.delete}>No</button>
      <button onClick={deleteData} className={styles.delete}>Yes</button></div>
      
      </> : null
      
     
  }
 
  </div>
    </>
  )
}
