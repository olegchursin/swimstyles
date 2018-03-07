import React from 'react'
import SwimStrokesList from './SwimStrokesList'
import data from './data.js'

class SwimStrokesContainer extends React.Component {
  state = {
    swimStrokes: []
  }

  componentDidMount = () => {
    this.setState({
      swimStrokes: data
    })
  }

  render () {
    return (
      <div className="ui text container">
        <h1>Swimming Strokes</h1>
        <SwimStrokesList swimStrokes={this.state.swimStrokes}/>
      </div>
    )
  }
}

export default SwimStrokesContainer;
