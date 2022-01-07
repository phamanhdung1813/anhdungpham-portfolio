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
              paddingTop: "10px",
            }}
          >
            <h1 style={{ fontSize: "1em" }}>
              <Typewriter
                options={{
                  strings: ["Who am I"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </h1>
            <ShortAboutMe />
          </Col>

          <Col
            md={12}
            style={{
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <h1 style={{ fontSize: "1em" }}>
              <Typewriter
                options={{
                  strings: ["About Me"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </h1>
            <MyBio />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
