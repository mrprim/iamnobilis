import React from 'react'
import './index.scss'

const aVsAn = word => {
  if (!word) return 'a'
  return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) >= 0 ? 'an' : 'a'
}

const getClassName = loading => loading ? 'character loading' : 'character'

const Character = ({ loading, identity = '', adjective = '', estate = '', generateCharacterClick }) => (
  <div className={getClassName(loading)} onClick={generateCharacterClick}>
    {'I am ' + aVsAn(identity) + ' '}
    <span className='modifier identity'>
      {identity.toLowerCase()}
    </span>
    {' who is the '}
    <span className='modifier adjective'>
      {adjective}
    </span>
    {' god of '}
    <span className='modifier estate'>
      {estate.toLowerCase()}
    </span>
    {'.'}
  </div>
)

module.exports = Character
