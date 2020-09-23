import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import Event from './Event'

export default function Calendar(props) {


    const showEvents = () => props.myEvents.map(event => {
        return <Event title={event.title} content={event.content} date={event.date} startTime={event.startTime} />
    })

  return (
    <div className='calendar-section'>
        <Timeline align="alternate">
            {showEvents()}
        </Timeline>
    </div>
  );
}
