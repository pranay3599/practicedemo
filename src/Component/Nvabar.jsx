import React from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import TaskManger from './TaskManger';

const Nvabar = () => {
    const navigate=useNavigate();
  return (
    <div  className="navbar">
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/Contact" >Contact</NavLink>
      <NavLink to="/task"  >TaskManger</NavLink>
    </div>
  )
}

export default Nvabar
