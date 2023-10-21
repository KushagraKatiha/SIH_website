import React from 'react'
import './App.css'
import SignUp from './components/UserPage/SignUpPage/SignUp'
import { Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Login from './components/UserPage/LoginPage/Login'


function App() {
    
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
    </Routes> 

  )
}

export default App
