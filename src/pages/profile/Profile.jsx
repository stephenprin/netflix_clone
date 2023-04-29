import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/navbar/Navbar'
import PlanScreen from '../../components/planscreen/PlanScreen'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import './profile.css'

const Profile = () => {
    const user = useSelector(selectUser)
  return (
      <div className='profile'>
          <Navbar />
          <div className='profile__body'>
              <h1>Edit Profile</h1>
              <div className='profile__info'>
                  <img src='https://th.bing.com/th/id/R.c71e601cdc814785016d4e410420899f?rik=E77O2YFToT9h8w&pid=ImgRaw&r=0' className='profile__avatar' alt='avatar' />
                  <div className='profile__details'>
                      <h2>{ user?.email}</h2>
                      <div className='profile__plan'> 
                          <h3>Plans</h3>
                          <PlanScreen/>
                          <button onClick={() => auth.signOut()} className='profile_signout'>Sign Out</button>
                      </div>
                  </div>
              </div>
            </div>
          
    </div>
  )
} 

export default Profile