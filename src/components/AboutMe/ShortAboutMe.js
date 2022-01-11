import React from "react";
import Card from "react-bootstrap/Card";
import SkillSet from "./SkillSet";

function ShortAboutMe() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <Card.Text style={{ textAlign: "justify" }}>
            Hi there !!!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <br />
            My name is Anh Dung Pham <span className="green">(Stanley) </span>.
            I'm an international student from{" "}
            <span className="green">Viet Nam.</span>
            <br />
            Recently, I have graduated on Computer System Technology at Seneca
            College, Toronto, Canada.
            <br />
            I'm a Networking Technician and Web Developer. I'm interested in Web
            Development and Cloud Platform technology. My favorite technologies
            are
            <span className="green">
              {" "}
              Java Spring Framework, RESTful web service, ReactJS with Redux
            </span>{" "}
            and system technologies with
            <span className="green">
              {" "}
              Amazon AWS, Spring Cloud, Jenkins, Docker, CICD, Git,...
            </span>
            <br />
          </Card.Text>
          My <span style={{ fontWeight:"bold", fontSize:"1.4rem", color: "#e05e0d" }}>SKILLSET:</span>
          <SkillSet />
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default ShortAboutMe;
