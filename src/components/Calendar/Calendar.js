import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import Event from './Event'

export default function Calendar(props) {

  const { myEvents } = props

  const sortedEvents = myEvents.sort((a, b) => (a.date > b.date) ? 1 : -1)

    const showEvents = () => sortedEvents.map(event => {
        return <Event title={event.title} content={event.content} date={event.date} startTime={event.startTime} />
      }
    )
  return (
    <div className='calendar-section'>
        <Timeline align="alternate">
            {showEvents()}
        </Timeline>
    </div>
  );
}
