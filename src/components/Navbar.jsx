import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>

    <nav>
        <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}

         
            <li><NavLink to="/"  style={({isActive})=>({backgroundColor:isActive ? 'yellow':''})} exact>Home</NavLink></li> 
            <li><NavLink to="/about"  style={({isActive})=>({backgroundColor:isActive ? 'green':''})} exact>About</NavLink></li>
            <li><NavLink to="/contact"   style={({isActive})=>({backgroundColor:isActive ? 'orange':''})}exact>Contact</NavLink></li>
            <li><NavLink to="/post"  style={({isActive})=>({backgroundColor:isActive ? 'pink':''})} exact> Dynamic-Page</NavLink></li>
            <li><NavLink to="/post/mobile/1" style={({isActive})=>({backgroundColor:isActive ? 'tail':''})}exact>Post with id</NavLink></li>

        </ul>
        
    </nav>
    
    
    
    </>
  )
}
export default Navbar
