import React from 'react'
import Event from './Event'

import { Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'



const localizer = momentLocalizer(moment)

export default function CalendarPage(props){
    

    const showEvents = props.myEvents.map(event => {
        const time = event.startTime 
        return {title: `${event.title} @ ${time}`, start: event.date, end: event.date}
    })

      return(
        <div>
            <h1>Calendar Page</h1>
            <Calendar
                localizer={localizer}
                events={showEvents}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                defaultDate={moment().toDate()}
                style={{ height: "100vh" }}
            
            />
        </div>
    )
}