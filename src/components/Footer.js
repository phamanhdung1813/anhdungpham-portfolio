import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn, FaReact } from "react-icons/fa";
import { FcSmartphoneTablet } from "react-icons/fc";
import { BiCopyright } from "react-icons/bi";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copyright">
          <h3 style={{textAlign: 'center'}}><FaReact style={{ fontSize:60, textAlign: 'center'}}/> Designed by Anh Dung Pham</h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright <BiCopyright/> {year} Anh Dung Pham <FcSmartphoneTablet/> </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/phamanhdung1813"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;