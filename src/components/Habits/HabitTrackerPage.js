import React from 'react'
import Habit from './Habit'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function HabitTrackerPage(props){

    const showHabits = () => props.habits.map(habit => {
        return <Habit title={habit.title} goal={habit.goalDays}  current={habit.currentDays} />
    })
    return(
        <div>
            <div className='habit-header'>
            <h1 className='section-name'>Habit Trackers</h1>
            <Fab color="primary" aria-label="add" size='small'>
                        <AddIcon />
            </Fab>
            </div>
            <ul>
                {showHabits()}
            </ul>
        </div>
    )
}