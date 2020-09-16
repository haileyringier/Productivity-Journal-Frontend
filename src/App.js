import React from 'react';
import './App.css';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import JournalPage from './components/JournalPage'
import HabitTrackerPage from './components/HabitTrackerPage'
import CalendarPage from './components/CalendarPage'
import NavBar from './components/NavBar';
import 'rsuite/lib/styles/index.less'

function App() {
  return (
      <div className="App">
        <NavBar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route  path='/journal' component={JournalPage} />
            <Route path='/habittracker' component={HabitTrackerPage} />
            <Route path='/calendar' component={CalendarPage} />
            <Redirect to='/' />
        </Switch>
      </div>
  );
}

export default App;
