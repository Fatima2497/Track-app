// "use client"
// import React, { useEffect, useRef, useState } from 'react'
// import ReactDOM  from 'react'
// import style from './modal.module.css'



// export default function Modal({show, onClose, children}) {
//   const [isBrowser, setIsBrowser ] = useState(false)
//   const [activity_types,setActivity] = useState('') 


//   useEffect(() => {
//     setIsBrowser(true)
//   },[])



  
//   const handleClick = (e) => {
//     e.preventDefault();
//     onClose();
//   }
//   const modalContent = show ? (
//     <div className={style.formGroup}>
//       <h1>Add Exercise</h1>
//         {children}
       
//     </div>
//   ) : null
   
//   // if(isBrowser) {
//   //   return ReactDOM.createPortal(
//   //     modalContent,
//   //     document.getElementById('modal-root')
//   //   )
//   // }else{
//   //   return null;
//   // }
 
// }
