import React, {useEffect, useState } from 'react'
import JournalEntry from './JournalEntry'
import AddIcon from '@material-ui/icons/Add'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import AddEntry from './AddEntry';
import moment from 'moment'
import HomeJournal from './HomeJournal';


export default function Journal(props){

    const [ todaysDate, setTodaysDate ] = useState()
    const [ entryForm, setEntryForm ] = useState(false)
    const { postEntry, date } = props
    
    useEffect(() => {
        setTodaysDate(moment().format('YYYY-MM-DD'))
    },[])
    
    let count = 0

    const showTodaysJournalEntries = () => props.journalEntries.map(entry => {
        if (entry.date == todaysDate) {
            count ++
        return <HomeJournal key={entry.id} content={entry.entry} date={entry.date} />
        }  
    })

    const addEntry = () => {
        setEntryForm(true)
    }
    const closeForm = () => {
        setEntryForm(false)
    }

    return(
        <div>
            <div className='journal-section-header'>
            <h1 className='section-name'>Today's Journal Entries</h1>
            <IconButton color='primary' aria-label="delete" onClick={addEntry}>
                <AddIcon />
            </IconButton>
            </div>
            <div className='journal-form'>
                {entryForm ? <AddEntry postEntry={postEntry} date={todaysDate} closeForm={closeForm}/> : null}
            </div>
            <ul className='todays-journal-entries'>
                {showTodaysJournalEntries()}
            </ul>
            {count == 0 ? <p>No entries today</p>: null}
        </div>
    )
}