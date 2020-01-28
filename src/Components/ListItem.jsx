import React, { Component } from 'react'

export class ListItem extends Component {
    render() {
        return (
            <div>
                {this.props.item.name} - Age: {this.props.item.age}
            </div>
        )
    }
}

export default ListItem
