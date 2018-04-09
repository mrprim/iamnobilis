import React from 'react'
import './index.scss'

const Controls = props => (
  <div>
    <div className='copy-button' onClick={props.copyToClipboardClick}>
      <i className='fas fa-share' />
    </div>
  </div>
)

module.exports = Controls
