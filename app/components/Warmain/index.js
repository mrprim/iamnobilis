import React from 'react'
import aVsAn from '../../utils/aVsAn'
import './index.scss'

const getHighlightableClass = (name, highlight, isStat) => (isStat ? 'stat' : '') + (highlight === name ? ' highlight' : '')

const Warmain = (props) => {
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
        {'Warmain'}
      </span>

      {' who wields the test of '}
      <span className={getHighlightableClass('domain', props.highlight, true)}>
        {props.estate.toLowerCase()}
      </span>
      {'.'}
    </div>
  )
}

module.exports = Warmain
