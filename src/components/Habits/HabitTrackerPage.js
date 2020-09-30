import React from 'react'
import Habit from './Habit'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default function HabitTrackerPage(props){

    const showHabits = () => props.habits.map(habit => {
        return <Habit 
                title={habit.title} 
                goal={habit.goalDays} 
                key={habit.id} 
                addCurrentDay={props.addCurrentDay} 
                id={habit.id} 
                current={habit.currentDays} 
                />
    })
    // const addHabit = () => {
    //     console.log("habit adder clicked")
    // }
    return(
        <div>
            <div className='habit-header'>
            <h1 className='section-name'>My Habit Trackers</h1>
            <IconButton color='primary' aria-label="delete">
                <AddIcon />
            </IconButton>
            </div>
            <Grid spacing={5} md={6}>
                <Paper>
                    {showHabits()}
                </Paper>
            </Grid>
        </div>
    )
}