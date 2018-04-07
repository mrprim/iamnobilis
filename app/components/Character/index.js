import React from 'react'
import aVsAn from '../../utils/aVsAn'
import './index.scss'

const getClassName = loading => loading ? 'character loading' : 'character'

const getHighlightableClass = (name, highlight, isStat) => (isStat ? 'stat' : '') + (highlight === name ? ' highlight' : '')

const Character = (props) => {
  if (!props.identity) return null

  return (
    <div>
      <div
        className={getClassName(props.loading)}
        onClick={props.generateCharacterClick}>

        <span className={getHighlightableClass('iAm', props.highlight)}>
          {'I am'}
        </span>

        {' ' + aVsAn(props.identity) + ' '}

        <span className={getHighlightableClass('identity', props.highlight, true)}>
          {props.identity.toLowerCase()}
        </span>

        {' who is the '}

        <span className={getHighlightableClass('adjective', props.highlight, true)}>
          {props.adjective}
        </span>

        {' '}

        <span className={getHighlightableClass('god', props.highlight)}>
          {'god'}
        </span>

        {' '}

        <span className={getHighlightableClass('ofEstate', props.highlight)}>
          {'of '}
          <span className={getHighlightableClass('estate', props.highlight, true)}>
            {props.estate.toLowerCase()}
          </span>
        </span>
        {'.'}
      </div>
      <div className='copy-button' onClick={props.copyToClipboardClick}>
        <i className='fas fa-share' />
      </div>
    </div>
  )
}

module.exports = Character
