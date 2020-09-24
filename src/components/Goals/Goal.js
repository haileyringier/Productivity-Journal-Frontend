import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';

export default function Goal(props){

    const { description, checkboxClicked } = props
    return(
        <ListItemIcon className='goal-list-icon'>
            <Checkbox onClick={checkboxClicked}/>
            <ListItemText primary={description}/>
        </ListItemIcon>
    )    
}