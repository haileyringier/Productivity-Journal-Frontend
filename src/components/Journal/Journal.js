import React from 'react'
import JournalEntry from './JournalEntry'

export default function Journal(props){

    // const showJournalEntries = () => props.journalEntries.map(entry => {
    //     return <JournalEntry key={entry.id} description={entry.entry} />
    // })
    return(
        <div>
            <h1>Journal Entry</h1>
            <button>Add an entry</button>
            {/* {showJournalEntries()} */}
        </div>
    )
}