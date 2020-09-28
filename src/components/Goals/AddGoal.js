import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'


export default function AddGoal(props){
   
    const { postGoal, closeForm } = props

    const [ description, setDescription  ] = useState('')
    const [ userId, setUserId ] = useState(1)

    const handleChange = (event) => {
        event.preventDefault()
        console.log(event.target.value)
        setDescription(event.target.value)
    }

    const submitGoal = (event) => {
        event.preventDefault()
        console.log("description", description)
        const goal = {
            description: description,
            user_id: userId
        }
        postGoal(goal)
        setDescription('')
        closeForm()
    }
    return (
        <form className='add-goal-form' onSubmit={submitGoal}>
            <TextField variant="filled" value={description} color="primary" onChange={handleChange}/>
        </form>
    )
}