import React from 'react'
import Icon from '../Icon'
import './index.scss'

const DeadLink = ({ type }) => (
  <span className='link dead'>
    <Icon type={type} />
  </span>
)

const Link = ({ type, title, loadClick }) => (
  <span className='link' title={title} onClick={loadClick(type)}>
    <Icon type={type} />
  </span>
)

const Controls = ({ loadClick, copyToClipboardClick }) => (
  <div className='controls'>
    <div className='copy-button' onClick={copyToClipboardClick}>
      <i className='fas fa-share' />
    </div>

    <div className='character-types'>
      <div>
        <Link title='Noble' type='noble' loadClick={loadClick} />
        <DeadLink title='Imperator' type='imperator' />
      </div>
      <div>
        <DeadLink title='Deceiver' type='deceiver' />
        <Link title='Warmain' type='warmain' loadClick={loadClick} />
        <DeadLink title='Mimic' type='mimic' />
        <Link title='Strategist' type='strategist' loadClick={loadClick} />
      </div>
      <div>
        <DeadLink title='Actual' type='actual' />
        <Link title='Zu' type='zu' loadClick={loadClick} />
      </div>
    </div>

  </div>
)

module.exports = Controls
