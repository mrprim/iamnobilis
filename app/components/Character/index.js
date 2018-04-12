import React from 'react'
import './index.scss'
import Noble from '../Noble'
import Strategist from '../Strategist'
import Warmain from '../Warmain'
import Zu from '../Zu'
import Imperator from '../Imperator'
import Controls from '../../containers/Controls'

const getClassName = loading => loading ? 'character loading' : 'character'

const CharacterType = ({ type, data }) => {
  switch (type) {
    case 'noble': return <Noble {...data} />
    case 'strategist': return <Strategist {...data} />
    case 'warmain': return <Warmain {...data} />
    case 'zu': return <Zu {...data} />
    case 'imperator': return <Imperator {...data} />
    default: return <Noble {...data} />
  }
}

const Character = props => {
  if (!props.identity) return null

  return (
    <div>
      <div className={getClassName(props.loading)} onClick={props.generateCharacterClick}>
        <CharacterType type={props.type} data={props} />
      </div>
      <Controls />
    </div>
  )
}

export default Character
