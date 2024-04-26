import { useState } from 'react'
import './App.css'
import TaskManger from './Component/TaskManger'
import Nvabar from './Component/Nvabar'
import {Routes,Route} from 'react-router-dom'
import Home from './Component/Home'
import Contact from './Component/Contact'

function App() {
  

  return (
    <>
    <Nvabar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/task" element={<TaskManger/>} />
    </Routes>
    </>
  )
}

export default App
