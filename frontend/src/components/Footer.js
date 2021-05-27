import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Footer = () => {
    return (
      <footer>
        <Container fluid>
          <Row className="text-center py-5  bg-dark text-light fluid " >
            <Col>All Right Reserved to Chamman sahu</Col>
          </Row>
        </Container>
      </footer>
    );
}

export default Footer
