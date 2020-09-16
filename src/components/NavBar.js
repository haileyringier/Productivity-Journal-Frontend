import React from 'react'
import { Link } from 'react-router-dom'


export default function NavBar(){

const menuOpen = () =>{
    console.log("menu clicked")
}
    return(
        <nav className='side-nav-bar'>
            {/* <button onClick={menuOpen} >Menu</button> */}
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/calendar'>Calendar</Link>
            <Link className='nav-link' to='/habittracker'>Habit Tracker</Link>
            <Link className='nav-link' to='/journal'>Journal</Link>
        </nav>
    )
}

  