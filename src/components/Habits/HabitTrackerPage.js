import React from 'react'
import Habit from './Habit'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton';


export default function HabitTrackerPage(props){

    const showHabits = () => props.habits.map(habit => {
        return <Habit title={habit.title} goal={habit.goalDays} key={habit.id} addCurrentDay={props.addCurrentDay} id={habit.id} current={habit.currentDays} />
    })
    const addHabit = () => {
        console.log("habit adder clicked")
    }
    return(
        <div>
            <div className='habit-header'>
            <h1 className='section-name'>My Habit Trackers</h1>
            <IconButton color='primary' aria-label="delete" onClick={addHabit}>
                <AddIcon />
            </IconButton>
            </div>
            <ul>
                {showHabits()}
            </ul>
        </div>
    )
}