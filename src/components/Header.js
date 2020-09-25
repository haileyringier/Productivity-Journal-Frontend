import React from 'react'

export default function Header(props){

    return(
        <div className='header-section'>
            <h2 className='date-header'>{props.date}</h2>
            <p>{props.quote}   --{props.author}</p>
        </div>
    )
}