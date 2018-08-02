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
        <Link title='Imperator' type='imperator' loadClick={loadClick} />
      </div>
      <div>
        <DeadLink title='Deceiver' type='deceiver' loadClick={loadClick} />
        <Link title='Warmain' type='warmain' loadClick={loadClick} />
        <DeadLink title='Mimic' type='mimic' loadClick={loadClick} />
        <Link title='Strategist' type='strategist' loadClick={loadClick} />
      </div>
      <div>
        <DeadLink title='Actual' type='actual' loadClick={loadClick} />
        <Link title='Zu' type='zu' loadClick={loadClick} />
      </div>
    </div>

  </div>
)

export default Controls