import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectDetails from "./ProjectDetails";
import { projectsAPI } from "./ProjectAPi";

const Projects = () => {
  const mapSingleProject = projectsAPI.map((p, i) => (
    <Col md={4} className="project-card" key={i}>
      <ProjectDetails
        image={p.image}
        title={p.title}
        description={p.description}
        name={p.name}
        source={p.source}
        visit={p.visit}
        techs={p.techs}
      />
    </Col>
  ));

  return (
    <Container fluid className="project-section">
      <Container>
        <div>
          <h1 className="project-heading">
            In this page, I am going to show all of my <strong className="green">recent projects</strong>, and code deployment.
            Further more details, please visit my <a href="https://github.com/phamanhdung1813" className="green">GitHub</a> repositories.  
          </h1>
         
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {mapSingleProject}
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
