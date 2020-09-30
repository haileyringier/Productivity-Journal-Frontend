import React from 'react'

export default function HomeJournal(props){
    
    const { date, content } = props

    return(
        <li>
            <h3 className='journal-entry-date'>Date: {date}</h3> 
            <p>{content}</p>
        </li>
    )
}