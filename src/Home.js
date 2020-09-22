import React from 'react'
import Header from './components/Header'
import DailyGoals from './components/Goals/DailyGoals'
import HabitTracker from './components/Habits/HabitTracker'
import Journal from './components/Journal/Journal'
import Calendar from './components/Calendar/Calendar'


export default function Home(props) {

        const { myEvents, habits, journalEntries, dailyGoals } = props
        
        return (
          <div className="App">
            
            <Calendar myEvents={myEvents} />
            <DailyGoals dailyGoals={dailyGoals}/>
            <HabitTracker habits={habits}/>
            <Journal journalEntries={journalEntries} />
    
          </div>
        );
    }

  
  