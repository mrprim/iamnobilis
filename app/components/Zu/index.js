import React from 'react'
import aVsAn from '../../utils/aVsAn'
import './index.scss'

const getHighlightableClass = (name, highlight, isStat) => (isStat ? 'stat' : '') + (highlight === name ? ' highlight' : '')

const Zu = (props) => {
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

      {' who is the master of '}

      <span className='stat'>
        {props.adjective}
      </span>

      {' '}

      <span className={getHighlightableClass('domain', props.highlight, true)}>
        {props.estate.toLowerCase()}
      </span>

      {'-style martial arts.'}
    </div>
  )
}

module.exports = Zu
