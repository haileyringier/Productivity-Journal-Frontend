import React from 'react'
import JournalEntry from './JournalEntry'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function JournalPage(props){

const { journalEntries } = props

const sortJournalEntries =  journalEntries.sort((a, b) => (a.date > b.date) ? 1 : -1);


    const showEntries = () => sortJournalEntries.map(entry => {
        return <JournalEntry  key={entry.id} content={entry.entry} date={entry.date} />
    })
    return(
        <div>
            <h1>My Journal</h1>
            <Grid container spacing={2}>
                    {showEntries()}
            </Grid>
        </div>
    )
}