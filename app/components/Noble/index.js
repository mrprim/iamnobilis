import React from 'react'
import aVsAn from '../../utils/aVsAn'
import './index.scss'

const getHighlightableClass = (name, highlight, isStat) => (isStat ? 'stat' : '') + (highlight === name ? ' highlight' : '')

const Noble = (props) => {
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
        {props.adjective.toLowerCase()}
      </span>

      {' '}

      <span className={getHighlightableClass('treasure', props.highlight)}>
        {'god'}
      </span>

      {' '}

      <span className={getHighlightableClass('persona', props.highlight)}>
        {'of '}
        <span className={getHighlightableClass('estate', props.highlight, true)}>
          {props.estate.toLowerCase()}
        </span>
      </span>
      {'.'}
    </div>
  )
}

export default Noble
