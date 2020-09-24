import React from 'react'
import Goal from './Goal'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';


export default function DailyGoal(props){

    const addGoal = () =>{
        console.log("clicked")
    }
    const checkboxClicked = () =>{
        console.log("task done - delete from state")
    }
    const showGoals = () => props.dailyGoals.map(goal => {
        return <Goal  checkboxClicked={checkboxClicked} key={goal.id} description={goal.description} />
    })
   

    return(
        <div className='goal-section'>
            <div className='goal-header'>
                <h1 className='section-name'>Daily Goals</h1>
                <Fab color="primary" aria-label="add" size='small' onClick={addGoal}>
                    <AddIcon />
                </Fab>
            </div>
            <List className='goal-list'>
                <ListItem alignItems='flex-start' className='goal-list-item'>
                    {showGoals()}
                </ListItem>
            </List>
        </div>
    )  
}


