import React from 'react'
import Icon from '../Icon'
import { Link as RouterLink } from 'react-router-dom'
import './index.scss'
import IconButton from '@material-ui/core/IconButton'

const DeadLink = ({ type }) => (
  <span className='link dead'>
    <Icon type={type} />
  </span>
)

const Link = ({ type, title }) => (
  <RouterLink to={`/${type}`}>
    <IconButton title={title}>
      <Icon type={type} />
    </IconButton>
  </RouterLink>
)

const Controls = ({ loadClick, copyToClipboardClick }) => (
  <div className='controls'>
    <div className='copy-button' onClick={copyToClipboardClick}>
      <i className='fas fa-share' />
    </div>

    <div className='character-types'>
      <div>
        <Link title='Noble' type='noble' />
        <Link title='Imperator' type='imperator' />
      </div>
      <div>
        <DeadLink title='Deceiver' type='deceiver' />
        <Link title='Warmain' type='warmain' />
        <DeadLink title='Mimic' type='mimic' />
        <Link title='Strategist' type='strategist' />
      </div>
      <div>
        <DeadLink title='Actual' type='actual' />
        <Link title='Zu' type='zu' />
      </div>
    </div>

  </div>
)

export default Controls
