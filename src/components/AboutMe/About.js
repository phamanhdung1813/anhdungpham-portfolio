import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typewriter from "typewriter-effect";
import ShortAboutMe from "./ShortAboutMe";
import MyBio from "./MyBio";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={12}
            style={{
              justifyContent: "center",
            }}
          >
            <h3 className="writter">
              <Typewriter
                options={{
                  strings: ["Who am I"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </h3>
            <ShortAboutMe />
          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
            }}
          >
            <h3 className="writter">
              <Typewriter
                options={{
                  strings: ["About Me"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </h3>
            <MyBio />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
