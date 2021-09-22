import React, { Component } from 'react'

export default class ShowDescription extends Component {
    render() {
        return (
            <div>
                <p> <b>Animal Breed:</b> {this.props.keyword} </p>
                <p> <b>Horn Count:</b> {this.props.horns} </p>
            </div>
        )
    }
}
