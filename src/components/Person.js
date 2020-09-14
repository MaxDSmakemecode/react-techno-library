import React from 'react'

export default function Person(props){
    const {headline, description, age} = props

    return(
        <div>
            <h1>{headline}</h1>
            <p>{description}</p>
            <small>{age}</small>
        </div>
    )
}