import React from 'react'
import './App.css'
import SignUp from './components/UserPage/SignUpPage/SignUp'
import { Routes,Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'


function App() {
    
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/signup" element={<SignUp/>} />
    </Routes> 

  )
}

export default App
