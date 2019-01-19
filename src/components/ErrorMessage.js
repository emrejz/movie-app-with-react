import React from 'react'
import PropTypes from 'prop-types'

export default function ErrorMessage(props) {
   
  return (
    <div className="ErrorMessage">
      {props.message}
    </div>
  )
  
}

ErrorMessage.propTypes={
message:PropTypes.string.isRequired
}
