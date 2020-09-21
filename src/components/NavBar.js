import React from 'react'
import { Link } from 'react-router-dom'
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap'

export default function NavBar(){

const menuOpen = () =>{
    console.log("menu clicked")
}
    return(
     
        <div className='nav-bar'>
        <h1 className='page-title'>Hello Hailey</h1>
        <div className='right-nav'>
            <nav className='navbar-links'>
                <Link className='nav-link' to='/'><HomeIcon/> Home</Link>
                <Link className='nav-link' to='/calendar'><TodayOutlinedIcon/> Calendar</Link>
                <Link className='nav-link' to='/habittracker'><AssessmentOutlinedIcon/> Habits</Link>
                <Link className='nav-link' to='/journal'><MenuBookOutlinedIcon/> Journal</Link>
                {/* <Link className='nav-link' to='/profile'><AccountCircleIcon /> Profile</Link> */}
                {/* <button className='sign-out-button'><ExitToAppIcon /> Sign out</button> */}
            </nav>
        </div>
        </div>
    )
}

  