import React from 'react';
import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar';
import Calendar from './components/Calendar'
import DailyGoals from './components/DailyGoals'
import HabitTracker from './components/HabitTracker'
import Journal from './components/Journal'

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Calendar />
      <DailyGoals />
      <HabitTracker />
      <Journal />
    </div>
  );
}

export default App;
