import React, { Component } from 'react'
import SingleText from './SingleText'

export class Texts extends Component {
    render() {
        return (this.props.texts.map(text => <SingleText text = {text}/>))
    }
}

export default Texts
