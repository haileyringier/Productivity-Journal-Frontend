import React from 'react'

export default function Habit(props){

    return(
        <li className='habit-li'>
            <h2>{props.title}</h2>
            <p>Goal days: {props.goal}</p>
            <p>Progress: {props.current}</p>
        </li>
    )
}