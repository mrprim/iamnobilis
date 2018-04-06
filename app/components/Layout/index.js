import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import PropTypes from 'prop-types'
import Footer from '../Footer'
import './index.scss'

const Layout = props => {
  return (
    <div className='iamnobilis-layout'>
      <Container fluid>
        <Row className='iamnobilis-main'>
          <Col>
            {props.children}
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.array
}

export default Layout
