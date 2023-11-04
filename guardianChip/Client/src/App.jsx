import React from 'react'
import './App.css'
import SignUp from './components/UserPage/SignUpPage/SignUp'
import { Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import Login from './components/UserPage/LoginPage/Login'
import Dashboard from './components/Dashboard/Dashboard'
import About from './components/About/About'


function App() {
    
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes> 

  )
}

export default App
