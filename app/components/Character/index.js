import React from 'react'
import './index.scss'

const Character = ({ identity, descriptor, estate, generateCharacterClick }) => (
  <div className='character' onClick={generateCharacterClick}>
    {'I am the '}
    <span className='modifier identity'>
      {identity}
    </span>
    {' who is the '}
    <span className='modifier descriptor'>
      {descriptor}
    </span>
    {' god of '}
    <span className='modifier estate'>
      {estate}
    </span>
    {'.'}
  </div>
)

module.exports = Character
