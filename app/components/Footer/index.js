import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Icon'
import './index.scss'

// This file can be excluded, and the manifest styled manually if wished
import 'redux-manifest/dist/styles.css'

const formatLink = object => encodeURIComponent(JSON.stringify(object))

const Footer = props => <div className='footer'>

  <div className='characters-types'>
    <div>
      <Link title='Noble' to={formatLink({ type: 'noble' })} >
        <Icon type='noble' />
      </Link>
      <span title='Imperator'>
        <Icon type='imperator' />
      </span>
    </div>
    <div>
      <span title='Deceiver'>
        <Icon type='deceiver' />
      </span>
      <Link title='Warmain' to={formatLink({ type: 'warmain' })} >
        <Icon type='warmain' />
      </Link>
      <span title='Mimic'>
        <Icon type='mimic' />
      </span>
      <Link title='Strategist' to={formatLink({ type: 'strategist' })} >
        <Icon type='strategist' />
      </Link>
    </div>
    <div>
      <span title='Actual'>
        <Icon type='actual' />
      </span>
      <span title='Zu'>
        <Icon type='zu' />
      </span>

    </div>
  </div>

  <div className='icons'>
    <a target='_blank' href='https://docs.google.com/document/d/1oeTWDAhVmTqJvhKEZbncfig471zNVECe3P6e51zs-pA/edit?usp=sharing'>
      <i className='fab fa-google-drive' />
    </a>
    <a target='_blank' href='https://github.com/mrprim/iamnobilis'>
      <i className='fab fa-github' />
    </a>
  </div>

  <div>© Sergio Rodriguez 2018</div>
  <div><i>Nobilis</i> is © Jenna Katerin Moran</div>
</div>

Footer.propTypes = {}

export default Footer
