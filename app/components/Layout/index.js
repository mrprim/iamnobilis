import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'

import './index.scss'

// This file can be excluded, and the manifest styled manually if wished
import 'redux-manifest/dist/styles.css'

const Layout = props => {
  return (
    <div className='iamnobilis-layout'>
      <Container fluid>
        <Row className='iamnobilis-main'>
          <Col>
            {props.children}
          </Col>
        </Row>
        <Row className='footer'>
          <Col>
            <a href='https://docs.google.com/document/d/1oeTWDAhVmTqJvhKEZbncfig471zNVECe3P6e51zs-pA/edit?usp=sharing'>
              I Am Nobilis
            </a> is an ultra simple hack for the roleplaying game Nobilis by Jenna K Moran.
          </Col>
        </Row>
      </Container>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array,
  runlevel: PropTypes.string,
  actions: PropTypes.shape({
    setRunlevel: PropTypes.func.isRequired
  })
}

export default Layout
