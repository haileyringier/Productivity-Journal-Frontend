import React from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

export default function Goal(props){

    const { description, checkboxClicked, id, deleteGoal } = props

    const deleteClicked = () => {
        console.log("delete goal clicked", id)
        deleteGoal(id)
    }
    return(
        <ListItemIcon className='goal-list-icon'>
            <Checkbox onClick={checkboxClicked}/>
            <ListItemText primary={description}/>
            {/* <CloseIcon onClick={deleteClicked}/> */}
            <IconButton aria-label="delete">
                <CloseIcon  onClick={deleteClicked}/>
            </IconButton>
        </ListItemIcon>
        
    )    
}