import React from 'react'
import './index.scss'

// This file can be excluded, and the manifest styled manually if wished
import 'redux-manifest/dist/styles.css'

const Footer = props => <div className='footer'>
  <div className='icons'>
    <a title='link to google drive system document.'target='_blank' href='https://docs.google.com/document/d/1oeTWDAhVmTqJvhKEZbncfig471zNVECe3P6e51zs-pA/edit?usp=sharing'>
      <i className='fab fa-google-drive' />
    </a>
    <a title='link to github page.' target='_blank' href='https://github.com/mrprim/iamnobilis'>
      <i className='fab fa-github' />
    </a>
  </div>

  <div>© Sergio Rodriguez 2018</div>
  <div><i>Nobilis</i> is © Jenna Katerin Moran</div>
</div>

Footer.propTypes = {}

export default Footer
