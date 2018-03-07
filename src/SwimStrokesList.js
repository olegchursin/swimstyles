import React from 'react'
import SwimStroke from './SwimStroke'

const SwimStrokesList = (props) => {
  return (
    <div>
      {
        props.swimStrokes.map((stroke) => {
          return <div key={stroke.id}><SwimStroke swimStroke={stroke} /></div>
        })
      }
    </div>
  )
}

export default SwimStrokesList
