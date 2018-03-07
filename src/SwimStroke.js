import React from 'react'

class SwimStroke extends React.Component {

  state = {
    user: '',
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitComment = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.props.swimStroke.id, this.state.user, this.state.text)
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
        <form onSubmit={this.submitComment}>
          <input type="text" name="user" value={this.state.user} placeholder="User" onChange={this.handleChange} />
          <input type="text" name="text" value={this.state.text} placeholder="Comment" onChange={this.handleChange} />
          <input type="submit" value="Add comment"/>
        </form>
      </div>
    )
  }
}

export default SwimStroke;
