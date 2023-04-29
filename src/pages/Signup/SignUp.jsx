import React, { useRef } from 'react'
import { auth } from '../../firebase';
import './signup.css'

const SignUp = () => {


  const email = useRef();
  const password = useRef();


  const register = (e) => { 
    e.preventDefault()
    auth.createUserWithEmailAndPassword(
      email.current.value,
      password.current.value
    ).then((user) => {
     
      console.log(user)
    }).catch((error) => { 
      alert(error.message)
    })
  }
  const signin = (e) => { 
    e.preventDefault()
    auth.signInWithEmailAndPassword(
      email.current.value,
      password.current.value
    ).then((user) => {
      
      console.log(user)
    }).catch((error) => {
      alert(error.message)
     })
  }
  return (
    <div className='signup'>
      
          <form>
              <h1>Sign In</h1>
              <input type='email' placeholder='Email Address' ref={email} />
        <input type='password' placeholder='Password' ref={ password} />
        <button type='submit' onClick={signin}>Sign In</button>
        
        <h4><span className='signup__gray'>New to Netflix? </span> <span className='signup__link' onClick={register}>Sign Up</span></h4>
        </form>
    </div>
  )
}

export default SignUp
