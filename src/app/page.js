import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Navbar } from './components/layout/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />
    <div className={styles.main}>
    <div className={styles.imgContent}>
    <img src='/back.jpg'  className={styles.image}/>
    </div>
    <div className={styles.textContent}>
    <h1 className={styles.heading}>Welcome to Exercise Tracking App</h1>
    <p className={styles.paragraph}>All progress takes place outside the comfort zone.</p>
    <q className={styles.text}>It’s not about how fast you’re moving. As long as you’re moving towards your goals, you are making yourself better. That’s all that matters. Being healthy and strong is a lifelong journey, so you don’t have to rush</q>
    </div>
    </div>
    </>
  )
}
 