import React from 'react'
import aVsAn from '../../utils/aVsAn'
import './index.scss'

const getClassName = loading => loading ? 'character loading' : 'character'

const Character = ({ copyToClipboardClick, loading, identity = '', adjective = '', estate = '', generateCharacterClick }) => (
  <div>
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
    <div className='copy-button' onClick={copyToClipboardClick}><i className='fas fa-share' /></div>
  </div>
)

module.exports = Character
