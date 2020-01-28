import React, { Component } from 'react'

export class SingleText extends Component {
    render() {
        return (
            <div style = {{backgroundColor: 'orange'}}>
                {this.props.text.message}
            </div>
        )
    }
}

export default SingleText
