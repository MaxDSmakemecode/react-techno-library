import React from 'react'

class Person extends React.Component {
    render(){
        const {headline, description, age} = this.props

        return(
            <div>
                <h1>{headline}</h1>
                <p>{description}</p>
                <small>{age}</small>
            </div>
        )
    }
}

export default Person