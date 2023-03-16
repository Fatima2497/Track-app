"use client";
import Link from "next/link";
import classes from "./navbar.module.css";
import { useRouter } from 'next/navigation';
import React, { useState } from "react";


export const Navbar = () => {
    const [token, setToken] = useState(null)

    React.useEffect(()=>{
      setToken(localStorage.getItem('token'))
    },[])
    const router = useRouter();

  function out() {
    
    localStorage.clear('token')
    router.push('/login')
  }
  return token ? (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link className={classes.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/about">
              Detail
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/addExercise">
              Add Exercise
            </Link>
          </li>
          <li>
            <Link className={classes.link} onClick={out} href="/login">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <>
      <nav className={classes.nav}>
        <ul className={classes.list}>
          <li>
            <Link className={classes.link} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/login">
              Login
            </Link>
          </li>
          <li>
            <Link className={classes.link} href="/register">
              Register
            </Link>
          </li>
          {/* <li>
            <Link className={classes.link} onClick={out} href="/login">
              Logout
            </Link>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
