import './App.css';
import images from './data';
import React, { Component } from 'react'
import DropDown from './DropDown';
import Header from './Header';
import ShowDescription from './ShowDescription';
import ImageList from './ImageList';

export default class App extends Component {
  state = {
    keyword: '',
    horns: ''
  }

  filterCreature = (e) => {
    this.setState({ keyword: e.target.value })
  }

  filterHorns = (e) => {
    this.setState({ horns: Number(e.target.value) })
  }


  render() {
    const creaturesImg = images.filter((creature) => {
      if (!this.state.keyword) {
        return true
      } else {
        return creature.keyword === this.state.keyword
      }
    }).filter((hornCreature) => {
      if (!this.state.horns) {
        return true
      } else {
        return hornCreature.horns === this.state.horns
      }
    })

    return (
      <div>
        <Header />
        <ShowDescription keyword={this.state.keyword} horns={this.state.horns} />
        <DropDown changeCreature={this.filterCreature} options={["narwhal", "rhino", "unicorn", "unilego", "triceratops", "markhor", "mouflon", "chameleon", "lizard", "dragon", "addax"]} className="input" />
        <DropDown changeCreature={this.filterHorns} options={[1, 2, 3, 100]} className="input" />
        <ImageList image={creaturesImg} className="img" />

      </div>
    )
  }
}
