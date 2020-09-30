import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../../Dashboard'


export default function HomeJournal(props){
    
    const { date, content } = props

    const formatDate = date.slice(0, 10)
    return(
        <li>
            <h3 className='journal-entry-date'>Date: {date}</h3> 
            <p>{content}</p>
        </li>
    )
}