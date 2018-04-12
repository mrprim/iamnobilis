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

      <span className={getHighlightableClass('treasure', props.highlight, true)}>
        {props.category}
      </span>

      {' '}

      <span className={getHighlightableClass('persona', props.highlight)}>
        {'of '}

        {formatEstateList(props.estate)}

      </span>
      {'.'}
    </div>
  )
}

const formatEstateList = estates => {
  estates = [...estates]
  const last = estates.pop()

  const ret = estates.map((e, i) => <span key={e + i}><span className='stat'>{e.toLowerCase()}</span>, </span>)
  ret.push(<span key={last}>and <span className='stat'>{last.toLowerCase()}</span></span>)

  return ret
}

export default Noble
