import React from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export default function Goal(props){

    const { description, id, deleteGoal } = props

    const deleteClicked = () => {
        deleteGoal(id)
    }
    return(
        <ListItemIcon className='goal-list-icon' alignItems='center'>
            <Checkbox size='small'/>
            <ListItemText id='goal-item-text' primary={description} />
                <IconButton aria-label="delete">
                    <CloseIcon  onClick={deleteClicked}/>
                </IconButton>
        </ListItemIcon>
        
    )    
}