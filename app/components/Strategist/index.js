import React from 'react'
import aVsAn from '../../utils/aVsAn'
import './index.scss'

const getHighlightableClass = (name, highlight, isStat) => (isStat ? 'stat' : '') + (highlight === name ? ' highlight' : '')

const Strategist = (props) => {
  if (!props.identity) return null

  return (
    <div>
      <span className={getHighlightableClass('aspect', props.highlight)}>
        {'I am'}
      </span>

      {' ' + aVsAn(props.identity) + ' '}

      <span className={getHighlightableClass('skills', props.highlight, true)}>
        {props.identity.toLowerCase()}
      </span>

      {' who is the '}

      <span className='stat'>
        {props.adjective}
      </span>

      {' '}

      <span className={getHighlightableClass('treasure', props.highlight)}>
        {'Strategist'}
      </span>

      {' dying from '}
      <span className='stat'>
        {props.estate.toLowerCase()}
      </span>
      {'.'}
    </div>
  )
}

export default Strategist
