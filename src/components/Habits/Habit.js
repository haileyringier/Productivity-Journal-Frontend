import React from 'react'
import { Doughnut } from 'react-chartjs-2'


const teal = '#3e7575'
const coral = '#e6b9a8'


export default function Habit(props){

    const { title, current, goal } = props
    const data = {
        labels: [
            `Goal Days: ${goal}`,
            `Completed: ${current}`,
        ],
        datasets: [{
            data: [goal, current],
            backgroundColor: [ teal, coral ],
            hoverBackgroundColor: [ teal, coral ]
        }]
    };

    return(
        <>
            <h3 className='habit-title'>{title}</h3>
            <Doughnut
                data={data}
                responsive='true'
            />
        </>
    )
}