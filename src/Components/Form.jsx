import React, { Component } from 'react'

export class Form extends Component {
    state = {
        name:'',
        age: ''
    }

    onChange = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <form onSubmit ={e=> this.props.formSubmit(e, this.state)}>
                Name: <input type= 'text' onChange = {e=> this.onChange(e)} name = 'name' value = {this.state.name} placeholder = 'Enter name...'/> <br></br>
                Age: <input type= 'number' onChange = {e=> this.onChange(e)} name = 'age' value = {this.state.age} placeholder = 'Enter age' />
                <input type = 'submit'/>
            </form>
        )
    }
}



export default Form
