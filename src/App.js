import './App.css';
import images from './data';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    keyword: ''
  }

  filterCreature = (e) => {
    this.setState({ keyword: e.target.value })
  }


  render() {
    const creaturesImg = images.filter((creature) => {
      if (!this.state.keyword) {
        return true
      } else {
        return creature.keyword === this.state.keyword
      }
    })

    return (
      <div>
        <header>
          <h1> Creature Gallery</h1>
          <p> Creatures can be filtered using the dropdown menu below</p>
        </header>
        <p> {this.state.keyword} </p>
        <select onChange={this.filterCreature} className="input">
          <option value=''> All </option>
          <option value="narwhal"> Narwhal </option>
          <option value="rhino"> Rhino </option>
          <option value="unicorn"> Unicorn </option>
          <option value="unilego"> Unilego </option>
          <option value="triceratops"> Triceratops </option>
          <option value="markhor"> Markhor </option>
          <option value="mouflon"> Mouflon </option>
          <option value="chameleon"> Chameleon </option>
          <option value="lizard"> Lizard </option>
          <option value="dragon"> Dragon </option>
          <option value="addax"> Addax </option>
        </select>
        <ul>
          {creaturesImg.map((creature) => (
            <li> <img src={creature.url} alt={creature.title} /> </li>
          )
          )}

        </ul>

      </div>
    )
  }
}
