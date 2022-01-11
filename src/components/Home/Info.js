import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Info() {
  return (
    <Container className="home-about-section" >
      <Container>
        <Row>
          <Col >
                <h3 className="info-title">Phone number</h3> 
                <a className="info-item" href="tel:647 575 9328">(+1) 647 575 9328</a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Info;

