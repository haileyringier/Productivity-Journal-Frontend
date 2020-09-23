import React from 'react'

export default function Goal(props){

    return(
        <li className='goal-li'>
            <p>{props.description}</p>
        </li>
    )    
}