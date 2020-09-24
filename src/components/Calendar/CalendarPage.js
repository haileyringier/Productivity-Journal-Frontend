import React from 'react'
import Event from './Event'

import { Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'



const localizer = momentLocalizer(moment)

export default class CalendarPage extends React.Component{
    
    state = {
        events: [
          {
            start: moment().toDate(),
            end: moment()
              .add(1, "days")
              .toDate(),
            title: "Some title"
          }
        ]
    }

    // const showEvents = () => props.myEvents.map(event => {
    //     return <Event title={event.title} content={event.content} date={event.date} />
    // })
    render(){
      return(
        <div>
            <h1>Calendar Page</h1>
            <Calendar
                localizer={localizer}
                events={this.state.events}
                startAccessor="start"
                endAccessor="end"
              defaultView="month"
              defaultDate={moment().toDate()}
              style={{ height: "100vh" }}
            />
        </div>
    )
}
}
