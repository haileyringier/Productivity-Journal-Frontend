import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import useStyles from '../../Dashboard'


export default function Event(props){

    const classes = useStyles()
    
    const { date, content } = props

    // const formatDate = date.slice(0, 10)
    return(
        <Grid item xs={8}>
          <Paper className='journal-entry'>
              <h3 className='journal-entry-date'>Date: {date}</h3> 
              <p className='journal-entry-text'>{content}</p>
              </Paper>
        </Grid>
    )
}

