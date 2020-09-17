import React from 'react'
import Event from './Event'

export default function Calendar(props){

    const showEvents = () => props.myEvents.map(event => {
        return <Event title={event.title} content={event.content} date={event.date} />
    })
    return(
        <div>
            <h1>Calendar</h1>
            <ul>
            {showEvents()}
            </ul>
        </div>
    )
}