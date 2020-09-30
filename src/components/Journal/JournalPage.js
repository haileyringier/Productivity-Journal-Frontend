import React from 'react'
import JournalEntry from './JournalEntry'
import Grid from '@material-ui/core/Grid';
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton';

export default function JournalPage(props){

const { journalEntries } = props

const sortJournalEntries =  journalEntries.sort((a, b) => (a.date > b.date) ? 1 : -1);
const reverseChronEntries = sortJournalEntries.reverse()

    const showEntries = () => reverseChronEntries.map(entry => {
        return <JournalEntry  key={entry.id} content={entry.entry} date={entry.date} />
    })
    return(
        <div>
            <div className='journal-section-header'>
            <h1>My Journal</h1>
            <IconButton color='primary' aria-label="delete">
                <AddIcon />
            </IconButton>
            </div>
            <Grid container spacing={2}>
                {showEntries()}
            </Grid>
        </div>
    )
}