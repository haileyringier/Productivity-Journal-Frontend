import React from 'react';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import JournalPage from './components/JournalPage'
import HabitTrackerPage from './components/HabitTrackerPage'
import CalendarPage from './components/CalendarPage'
import NavBar from './components/NavBar';
import 'rsuite/lib/styles/index.less'

const baseURL = ('http://localhost:3000/')
const calendarURL = ('http://localhost:3000/events')
const habitsURL = (`${baseURL}habits`)
const journalURL = (`${baseURL}journal`)
const goalsURL = (`${baseURL}goals`)

export default class App extends React.Component{
  
  state = {
    myEvents: [],
    habits: [],
    journalEntries: [],
    dailyGoals: []
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
    console.log(myEvents, journalEntries, habits, dailyGoals)
  return (
      <div className="App">
        <NavBar />
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
      </div>
  );
  }
}


