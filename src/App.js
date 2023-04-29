import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./pages/home/HomeScreen";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

function App() {
  const user = useSelector(selectUser)

  const dispatch = useDispatch()
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth)=> { 
      if (userAuth) {
        
        dispatch(login({
          uid: userAuth.uid, 
          email: userAuth.email,
          password: userAuth.password,
        }))
      } else {
        
        dispatch(logout()) 

      }
    })
    return unsubscribe;
   }, []);
  return (
    <div className="app">
  
      <Router>
        {!user ? (<Login  />) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route path="/profile" element={<Profile/>}/>
          
        
        </Routes>
        )}
        
    </Router>
    </div>
  );
}

export default App;