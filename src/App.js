import React from 'react';
import './App.css';
import 'rsuite/lib/styles/index.less'
import Dashboard from './Dashboard';

export default function App(){
  return(
    <>
    <Dashboard />
    </>
  )
}

// const baseURL = ('http://localhost:5000/')
// const calendarURL = ('http://localhost:5000/events')
// // const baseURL = ('https://productivity-day-journal.herokuapp.com/')
// // const calendarURL = ('https://productivity-day-journal.herokuapp.com/events')
// const habitsURL = (`${baseURL}habits`)
// // const journalURL = (`${baseURL}journal`)
// const journalURL = ('http://localhost:5000/journal')
// const goalsURL = (`${baseURL}goals`)

// export default class App extends React.Component{
//   state = {
//     user: {
//       name:"",
//       username: "",
//     },
//     date: "",
//     myEvents: [],
//     habits: [],
//     journalEntries: [],
//     dailyGoals: []
// }

// componentDidMount(){
//     fetch(calendarURL)
//         .then(response => response.json())
//         .then(response => this.setState({myEvents: response.events}))
//     fetch(habitsURL)
//         .then(response => response.json())
//         .then(response => this.setState({habits: response.habits}))
//     fetch(journalURL)
//         .then(response => response.json())
//         .then(response => this.setState({journalEntries: response.journal}))
//     fetch(goalsURL)
//         .then(response => response.json())
//         .then(response => this.setState({dailyGoals: response.goals}))
// }
  
//   render(){
//     const { myEvents, habits, journalEntries, dailyGoals } = this.state
//     console.log(myEvents, habits, journalEntries)
//   return (
//       <div className="App">
//         <Dashboard/>
//         <Switch>
//             <Route 
//               exact path='/' 
//               render={routerProps => 
//                 <Home {...routerProps} 
//                   myEvents={myEvents} 
//                   habits={habits} 
//                   journalEntries={journalEntries} 
//                   dailyGoals={dailyGoals} />
//               }
//             />
//             <Route  
//               path='/journal' 
//               render={routerProps => 
//                 <JournalPage 
//                   {...routerProps} 
//                   journalEntries={journalEntries}
//             />
//               } 
//             />
//             <Route  
//               path='/calendar' 
//               render={routerProps => 
//                 <CalendarPage
//                   {...routerProps} 
//                   myEvents={myEvents}
//             />
//               } 
//             />
//             <Route  
//               path='/habittracker' 
//               render={routerProps => 
//                 <HabitTrackerPage 
//                   {...routerProps} 
//                   habits={habits}
//             />
//               } 
//             />
//             <Redirect to='/' />
//         </Switch>
//       </div>
//   );
// }
// }


