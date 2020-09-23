import React from 'react'
import JournalEntry from './JournalEntry'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

export default function Journal(props){

    // const showJournalEntries = () => props.journalEntries.map(entry => {
    //     return <JournalEntry key={entry.id} description={entry.entry} />
    // })
    return(
        <div>
            <h1 className='section-name'>Journal Entry</h1>
            <Fab color="primary" aria-label="add" size='small'>
                        <AddIcon />
                </Fab>
            {/* {showJournalEntries()} */}
        </div>
    )
}