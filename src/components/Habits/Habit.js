import React, {useEffect, useState} from 'react'
import { Doughnut } from 'react-chartjs-2';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'

const teal = '#3e7575'
const coral = '#e6b9a8'

export default function Habit(props){

    const [ completed, setCompleted ] = useState(false)
    const [ currentDays, setCurrentDays ] = useState(0)
    const { title, current, goal, id, addCurrentDay } = props
    
    useEffect(() => {
        setCurrentDays(current)
    }, [current])

    const data = {
        labels: [
            `Goal Days: ${goal}`,
            `Completed: ${currentDays}`,
        ],
        datasets: [{
            data: [goal, currentDays],
            backgroundColor: [ teal, coral ],
            hoverBackgroundColor: [ teal, coral ]
        }]
    };
    const addDay = () => {
        let newCurrent = current + 1
        setCompleted(true)
        setCurrentDays(newCurrent)
        addCurrentDay(id, newCurrent)
    }
    return(
        <div className='habit-section'>
                <h3 className='habit-title'>{title}</h3>
                <Doughnut
                    data={data}
                    responsive='true'
                />
                {completed ? <Button  id='add-day' color="primary" onClick={addDay}> Completed </Button> :
                    <Button variant="outlined" id='add-day' color="primary" onClick={addDay}>
                        Not Complete
                    </Button>}
        </div>
    )
}