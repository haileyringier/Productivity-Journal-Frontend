import React from 'react'
import { Link } from 'react-router-dom'
import TodayOutlinedIcon from '@material-ui/icons/TodayOutlined';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeIcon from '@material-ui/icons/Home';

export default function NavBar(){

const menuOpen = () =>{
    console.log("menu clicked")
}
    return(
        <div className='nav-bar'>
        <h1 className='page-title'>Productivity Journal</h1>
            <nav className='navbar-links'>
                <Link className='nav-link' to='/'><HomeIcon/> Home</Link>
                <Link className='nav-link' to='/calendar'><TodayOutlinedIcon/> Calendar</Link>
                <Link className='nav-link' to='/habittracker'><AssessmentOutlinedIcon/> Habits</Link>
                <Link className='nav-link' to='/journal'><MenuBookOutlinedIcon/> Journal</Link>
            </nav>
        </div>
    )
}

  