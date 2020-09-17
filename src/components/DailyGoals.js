import React from 'react'
import Goal from './Goal'

export default function DailyGoal(props){

    const showGoals = () => props.dailyGoals.map(goal => {
        return <Goal description={goal.description} />
    })
    return(
        <div>
            <h1>Daily Goals</h1>
            <ul>
                {showGoals()}
            </ul>
        </div>
    )
}