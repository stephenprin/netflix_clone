import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  const transitionNavBar = () => {
    if (window.scrollY > 100) { 
      setShow(true);
    }
  }
  useEffect(() => { 
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, [])


  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className='nav_container'>
        <img src='https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=IE6GOiA8%2bT5dJQ&pid=ImgRaw&r=0' className='nav_logo' alt='logo' />
        <img src='https://th.bing.com/th/id/R.c71e601cdc814785016d4e410420899f?rik=E77O2YFToT9h8w&pid=ImgRaw&r=0' className='nav_avatar' alt='avatar' />

      </div>
   </div>
  )
}

export default Navbar