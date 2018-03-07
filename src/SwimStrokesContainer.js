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

  handleSubmit = (id, user, text) => {
    let updatedStrokes = this.state.swimStrokes.slice() // create a copy of the []
    let comment = {user: user, text: text}

    updatedStrokes.forEach(stroke => {
      if(user && text && stroke.id === id){
        stroke.comments.push(comment)
      }
    })

    this.setState({
      swimStrokes: updatedStrokes
    })
  }

  render () {
    return (
      <div className="ui text container">
        <h1>Swimming Strokes</h1>
        <SwimStrokesList swimStrokes={this.state.swimStrokes} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default SwimStrokesContainer;
