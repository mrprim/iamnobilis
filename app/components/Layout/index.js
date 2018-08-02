import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Footer from '../Footer'
import './index.scss'

const getClassName = type => {
  let className = 'iamnobilis-layout'
  if (['strategist', 'deceiver', 'mimic', 'warmain'].includes(type)) {
    className += ' rider'
  }
  return className
}

const Layout = ({ type, children }) => {
  return (
    <div className={getClassName(type)}>
      <Container fluid>
        <Row className='iamnobilis-main'>
          <Col>
            <main>
              {children}
            </main>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
