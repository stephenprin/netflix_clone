import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router ,Routes, Route } from "react-router-dom";

import "./App.css";
import { auth } from "./firebase";
import HomeScreen from "./pages/home/HomeScreen";
import Login from "./pages/login/Login";

function App() {
  const user = null

  useEffect(() => {
    const token = auth.onAuthStateChanged(userAuth => { 
      console.log(userAuth);
    })
    return token;
   }, []);
  return (
    <div className="app">
  
      <Router>
        {!user ? (<Login  />) : (
          <Routes>
          <Route path="/" element={<HomeScreen/>}>
          </Route>
        </Routes>
        )}
        
    </Router>
    </div>
  );
}

export default App;