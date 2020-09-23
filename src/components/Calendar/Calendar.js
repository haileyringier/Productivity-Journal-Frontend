import React from 'react'
import Event from './Event'

export default function Calendar(props){

    const showEvents = () => props.myEvents.map(event => {
        return <Event title={event.title} content={event.content} date={event.date} />
    })
    return(
        <div className='calendar-section'>
            <div className='calendar-header'>
                <h1 className='section-name'>Calendar</h1>
            </div>
            <ul className='calendar-list'>
            {showEvents()}
            </ul>
        </div>
    )
}