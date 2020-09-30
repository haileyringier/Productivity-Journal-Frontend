import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'


export default function AddEntry(props){
   
    const { postEntry, closeForm, date } = props

    const [ content, setContent  ] = useState('')
    const [ userId, setUserId ] = useState(1)

    const handleChange = (event) => {
        event.preventDefault()
        setContent(event.target.value)
    }

    const submitEntry = (event) => {
    
        const entry = {
            entry: content,
            date: date,
            user_id: userId
        }
        postEntry(entry)
        setContent('')
        closeForm()
        
    }
    return (
        <form className='add-entry-form' onSubmit={submitEntry} >
            <TextField fullWidth variant="filled" value={content} color="primary" onChange={handleChange} />
        </form>
    )
}