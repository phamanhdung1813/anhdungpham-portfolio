import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import myAvatar from "../../Assets/Home/my-avatar.jpg";
import ExtraHome from "./ExtraHome";

function Home() {
  return (
    <section>
      <Container className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 style={{ paddingBottom: 10 }} className="heading">
                Hello everyone <span className="wave">👋</span> !!! 
              </h1>
              <h1 className="heading-name">
                My name is 
                <strong className="main-name"> Stanley Pham</strong>
              </h1>
              <div style={{padding: 10}}>
                <Type />
              </div>

              <h1 className="short-description">
                I'm 21 years old, I am currently living in Toronto, Canada. 
                My graduated program is Computer System Technology. Especially, I am interested in 
                Backend developer with Java Spring, and working with automatic tasks on Cloud platform. 
              </h1>
            </Col>
            
            
            <Col md={4} style={{ paddingTop: 50, paddingBottom: 50 }}>
              <img src={myAvatar} alt="home" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      <ExtraHome/>
      
    </section>
    
    
  );
}

export default Home;
