import React from 'react'
import './index.scss'
import Noble from '../Noble'
import Strategist from '../Strategist'
import Warmain from '../Warmain'

const getClassName = loading => loading ? 'character loading' : 'character'

const CharacterType = ({ type, data }) => {
  switch (type) {
    case 'noble': return <Noble {...data} />
    case 'strategist': return <Strategist {...data} />
    case 'warmain': return <Warmain {...data} />
    default: return <Noble {...data} />
  }
}
const Character = (props) => {
  if (!props.identity) return null

  return (
    <div>
      <div
        className={getClassName(props.loading)}
        onClick={props.generateCharacterClick}>
        <CharacterType type={props.type} data={props} />
      </div>
      <div className='copy-button' onClick={props.copyToClipboardClick}>
        <i className='fas fa-share' />
      </div>
    </div>
  )
}

module.exports = Character
