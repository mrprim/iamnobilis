import React from 'react'

import './index.scss'

// This file can be excluded, and the manifest styled manually if wished
import 'redux-manifest/dist/styles.css'

const Footer = props => <div className='footer'>

  <div className='icons'>
    <a target='_blank' href='https://docs.google.com/document/d/1oeTWDAhVmTqJvhKEZbncfig471zNVECe3P6e51zs-pA/edit?usp=sharing'>
      <i className='fab fa-google-drive' />
    </a>
    <a target='_blank' href='https://github.com/mrprim/iamnobilis'>
      <i className='fab fa-github' />
    </a>
  </div>

  <span>©2018</span>
  <a href='https://docs.google.com/document/d/1oeTWDAhVmTqJvhKEZbncfig471zNVECe3P6e51zs-pA/edit?usp=sharing'>
    I Am Nobilis
  </a>
  is an ultra simple hack for the roleplaying game Nobilis by Jenna K Moran.
</div>

Footer.propTypes = {}

export default Footer
