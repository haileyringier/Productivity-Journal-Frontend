import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'


export default function AddEntry(props){
   
    const { postEntry, closeForm } = props

    const [ content, setContent  ] = useState('')
    const [ userId, setUserId ] = useState(1)

    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setContent(event.target.value)
    }

    const submitEntry = (event) => {
        console.log("content", content)
        const entry = {
            entry: content,
            date: "2020-09-29",
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