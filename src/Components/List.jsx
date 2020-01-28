import React, { Component } from 'react'
import ListItem from './ListItem'

export class List extends Component {

    render() {
        return this.props.items.map(item => <ListItem item = {item} />)
    }
}

export default List
