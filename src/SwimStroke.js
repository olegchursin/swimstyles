import React from 'react'

class SwimStroke extends React.Component {

  state = {
    user: '',
    text: ''
  }

  render () {
    let comments = this.props.swimStroke.comments.map((comment) => {
      return <div key={comment.user}><strong>{comment.user}:</strong> {comment.text}</div>
    })
    return(
      <div className="ui segment">
        <h3>{this.props.swimStroke.name}</h3>
        <h5>Short name: {this.props.swimStroke.shortname}</h5>
        <p>{this.props.swimStroke.description}</p>
        {comments}
      </div>
    )
  }
}

export default SwimStroke;
