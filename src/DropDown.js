import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (

            <select onChange={this.props.changeCreature} className="input">
                <option value=''> All </option>
                {this.props.options.map((option) => <option value={option}>{option}</option>)}
            </select>
        )
    }
}
