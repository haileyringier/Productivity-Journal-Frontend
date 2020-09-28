import React from 'react'
import JournalEntry from './JournalEntry'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton';


export default function Journal(props){

    // const showJournalEntries = () => props.journalEntries.map(entry => {
    //     return <JournalEntry key={entry.id} description={entry.entry} />
    // })

    const addEntry = () => {
        console.log("clicked add journal entry")
    }

    return(
        <div>
            <h1 className='section-name'>Journal Entry</h1>
            <IconButton color='primary' aria-label="delete" onClick={addEntry}>
                <AddIcon />
            </IconButton>
            {/* {showJournalEntries()} */}
        </div>
    )
}