import React from 'react'
import Goal from './Goal'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function DailyGoal(props){

    const showGoals = () => props.dailyGoals.map(goal => {
        return <Goal key={goal.id} description={goal.description} />
    })

    const addGoal = () =>{
        console.log("clicked")
    }
    return(
        <div className='goal-section'>
            <div className='goal-header'>
                <h1>Daily Goals</h1>
                {/* <Fab color="primary" aria-label="add" size='small' onClick={addGoal}>
                        <AddIcon />
                </Fab> */}
            </div>
            <ul>
                {showGoals()}
            </ul>
        </div>
    )  
}