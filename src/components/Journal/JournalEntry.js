import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

export default function Event(props){

    const { date, content } = props

    return(
        <Grid item xs={7}>
            <Paper className='journal-entry'>
                <h3 className='journal-entry-date'>Date: {date}</h3> 
                <p className='journal-entry-text'>{content}</p>
            </Paper>
        </Grid>
    )
}

