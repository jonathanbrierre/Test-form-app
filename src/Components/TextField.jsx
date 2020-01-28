import React, { Component } from 'react'

export class TextField extends Component {
    state = {
        message: ''
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    
    render() {
        return (
            <form onSubmit = {e => this.props.textSubmit(e, this.state)}>
                <input onChange = { e => { this.onChange(e)}} type='text' value = {this.state.message} name = 'message' />
                Characters Left: {this.props.maxChar - this.state.message.length} <br></br>
                <input type = 'submit'/>
            </form>
        )
    }
}

export default TextField
