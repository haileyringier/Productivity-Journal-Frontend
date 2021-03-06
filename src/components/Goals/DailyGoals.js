import React, { useState } from 'react'
import Goal from './Goal'
import AddIcon from '@material-ui/icons/Add'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import AddGoal from './AddGoal'


export default function DailyGoal(props){

    const [ goalOpen, setGoalOpen ] = useState(false)

    const { deleteGoal, dailyGoals, postGoal } = props

    const addGoal = () =>{
        setGoalOpen(true)
    }
    const showGoals = () => dailyGoals.map(goal => {
        return <Goal deleteGoal={deleteGoal} key={goal.id} id={goal.id} description={goal.description} />
    })
    const closeForm = () => {
        setGoalOpen(false)
    }
    return(
        <div className='goal-section'>
            <div className='goal-header'>
                <h1 className='section-name'>Daily Goals</h1>
                <IconButton color='primary' aria-label="delete" onClick={addGoal}>
                    <AddIcon />
                </IconButton>
            <div className='goal-form'>
                {goalOpen ? <AddGoal postGoal={postGoal} closeForm={closeForm}/> : null}
            </div>
            </div>
            <List className='goal-list'>
                <ListItem alignItems='flex-start' className='goal-list-item'>
                    {showGoals()}
                </ListItem>
            </List>
        </div>
    )  
}


