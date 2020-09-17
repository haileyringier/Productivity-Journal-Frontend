import React from 'react'
import JournalEntry from './JournalEntry'

export default function JournalPage(props){


    const showEntries = () => props.journalEntries.map(entry => {
        return <JournalEntry  content={entry.entry} date={entry.date} />
    })
    return(
        <div>
            <p>Journal Page</p>
            {showEntries()}
        </div>
    )
}