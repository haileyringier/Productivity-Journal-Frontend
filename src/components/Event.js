import React from 'react'

export default function Event(props){
const { title, content, date } = props

    return(
        <li>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{content}</p>
        </li>
    )
}