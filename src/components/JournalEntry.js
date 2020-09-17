import React from 'react'

export default function Event(props){
const { date, content } = props

    return(
        <li>
            <p>{date}</p>
            <p>{content}</p>
        </li>
    )
}