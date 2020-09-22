import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {withStyles} from "@material-ui/core/styles"

import { mainListItems, secondaryListItems } from './components/ListItems';
import DailyGoals from './components/Goals/DailyGoals'
import HabitTracker from './components/Habits/HabitTracker'
import Journal from './components/Journal/Journal'
import Calendar from './components/Calendar/Calendar'
import { Switch, Route, Redirect } from 'react-router-dom'
import JournalPage from './components/Journal/JournalPage'
import HabitTrackerPage from './components/Habits/HabitTrackerPage'
import CalendarPage from './components/Calendar/CalendarPage'
import Home from './Home'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Productivity Journal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}))

const baseURL = ('http://localhost:5000/')
// const baseURL = ('https://productivity-day-journal.herokuapp.com/')
const habitsURL = (`${baseURL}habits`)
const calendarURL = (`${baseURL}events`)
const journalURL = (`${baseURL}journal`)
const goalsURL = (`${baseURL}goals`)


export default class Dashboard extends React.Component {

    state = {
        user: {
          name:"",
          username: "",
        },
        date: "",
        myEvents: [],
        habits: [],
        journalEntries: [],
        dailyGoals: [],
        open: true
    }

    componentDidMount(){
        fetch(calendarURL)
            .then(response => response.json())
            .then(response => this.setState({myEvents: response.events}))
        fetch(habitsURL)
            .then(response => response.json())
            .then(response => this.setState({habits: response.habits}))
        fetch(journalURL)
            .then(response => response.json())
            .then(response => this.setState({journalEntries: response.journal}))
        fetch(goalsURL)
            .then(response => response.json())
            .then(response => this.setState({dailyGoals: response.goals}))
    }

render(){
const { myEvents, habits, journalEntries, dailyGoals } = this.state

const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Hello Hailey
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
    <List>{mainListItems}</List>
        <Divider />
    <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
            <Route 
            exact path='/' 
            render={routerProps => 
            <Home {...routerProps} 
                myEvents={myEvents} 
                habits={habits} 
                journalEntries={journalEntries} 
                dailyGoals={dailyGoals} />
            }
        />
        <Route  
            path='/journal' 
            render={routerProps => 
            <JournalPage 
                {...routerProps} 
                journalEntries={journalEntries}
        />
            } 
        />
        <Route  
            path='/calendar' 
            render={routerProps => 
            <CalendarPage
                {...routerProps} 
                myEvents={myEvents}
        />
            } 
        />
        <Route  
            path='/habittracker' 
            render={routerProps => 
            <HabitTrackerPage 
                {...routerProps} 
                habits={habits}
        />
            } 
            />
            <Redirect to='/' />
        </Switch>
      </main>
    </div>
  )
}}