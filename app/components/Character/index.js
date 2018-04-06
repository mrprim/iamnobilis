import React from 'react'
import './index.scss'

const aVsAn = word => {
  if (!word) return 'a'
  return ['a', 'e', 'i', 'o', 'u'].indexOf(word[0].toLowerCase()) >= 0 ? 'an' : 'a'
}

const Character = ({ identity = '', adjective = '', estate = '', generateCharacterClick }) => (
  <div className='character' onClick={generateCharacterClick}>
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
