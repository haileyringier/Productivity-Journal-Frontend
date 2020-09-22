import React from 'react'
import Habit from './Habit'

export default function HabitTracker(props){

    const showHabits = () => props.habits.map(habit => {
        return <Habit title={habit.title} goal={habit.goalDays}  current={habit.currentDays} />
    })
    return(
        <div>
            <h1>Habit Trackers</h1>
            <ul>
                {/* {showHabits()} */}
            </ul>
        </div>
    )
}