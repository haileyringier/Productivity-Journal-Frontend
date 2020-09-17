import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Calendar from './components/Calendar'
import DailyGoals from './components/DailyGoals'
import HabitTracker from './components/HabitTracker'
import Journal from './components/Journal'


export default function Home(props) {

        const { myEvents, habits, journalEntries, dailyGoals } = props
        
        return (
          <div className="App">
            <Header />
            <Calendar myEvents={myEvents}/>
            <DailyGoals dailyGoals={dailyGoals}/>
            <HabitTracker habits={habits}/>
            <Journal journalEntries={journalEntries} />
    
          </div>
        );
    }

  
  