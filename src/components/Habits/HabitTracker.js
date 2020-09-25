import React from 'react'
import Habit from './Habit'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function HabitTracker(props){

    const showHabits = () => props.habits.map(habit => {
        return <Habit title={habit.title} goal={habit.goalDays}  current={habit.currentDays} />
    })
    return(
        <div>
            <div className='habit-header'>
            <h1 className='section-name'>Habit Trackers</h1>
            </div>
            <ul className='habit-list'>
                {showHabits()}
            </ul>
        </div>
    )
}