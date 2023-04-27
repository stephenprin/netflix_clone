import React from 'react'

import SignUp from '../Signup/SignUp';
import './login.css'


const Login = () => {
 
  const [signIn, setSignIn] = React.useState(false);
  return (
    <div className='loginScreen'>
          <div className='login_screen_bg'>
            
              <img src="https://th.bing.com/th/id/R.05c96bba4090acafe115aad47e66572d?rik=IE6GOiA8%2bT5dJQ&pid=ImgRaw&r=0" className='login_screen_logo' alt='logo' />
              <button className='login_screen_button' onClick={()=>setSignIn(true)}>Sign In</button>
              
                <div className='login_screen_gradient' />
          </div>
          
          <div className='login_screen_body'>
              {signIn ? (
              <SignUp/>
              ) : (
                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anywhere. Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className='login_screen_input'>
                    <form>
                        <input type='email' placeholder='Email Address' />
                          <button className='login_screen_getStarted' onClick={()=>setSignIn(true)}>GET STARTED</button>
                      </form>
                  </div>
            </>
        )}

              
            </div>
    </div>
  )
}

export default Login
