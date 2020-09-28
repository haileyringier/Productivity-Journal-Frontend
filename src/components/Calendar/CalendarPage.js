import React, { useState } from 'react'
import { Calendar, Views, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import AddEvent from './AddEvent'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const localizer = momentLocalizer(moment)

export default function CalendarPage(props){
    const [ formOpen, setFormOpen ] = useState(false)
    const classes = useStyles();

    const showEvents = props.myEvents.map(event => {
        const time = event.startTime 
        return {title: `${event.title} @ ${time}`, start: event.date, end: event.date}
    })

    const addEvent = () => {
        console.log(formOpen)
        setFormOpen(true)
    }
    const handleClose = () => {
        setFormOpen(false);
      };
      const body = (
         <form >
            <TextField variant="filled" color="primary" />
        </form> 
      )

      return(
        <div>
            <div className='calendar-page-header'>
            <h2>Add an Event</h2>
            <IconButton color='primary' aria-label="delete" onClick={addEvent}>
                    <AddIcon />
            </IconButton>
            <Modal open={formOpen} onClose={handleClose}>
                {body}
             </Modal>
            </div>    
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