import React from 'react'

class Person extends React.Component {
    render(){
        return(
            <React.Fragment>
                {this.props.person}
            </React.Fragment>
        )
    }
}

export default Person