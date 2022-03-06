import React from "react";
import Card from "react-bootstrap/Card";
import { BiCodeBlock } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";

const ProjectDetails = (props) => {
  const pTech = props.techs.map((tech, i) => (
    <div className="icon-project-image" key={i}>
      <Card.Img
        className="project-icon-custom-icon "
        alt={i}
        src={tech}
      ></Card.Img>
    </div>
  ));

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.image} alt="card-img" />
      <Card.Body style={{ paddingLeft: "20px" }}>
        <Card.Title>
          <h4 style={{ textAlign: "center" }} className="project-title">
            {props.title}
          </h4>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <h4 className="technology">
          TECHNOLOGIES
        </h4>

        <div>{pTech}</div>

        <div className="source-demo">
          <a className="btn btn-outline-success" href={props.visit}>
            DEMO
            <BsQuestion className="demo-source-icon" />
          </a>
          <a className="btn btn-link btn-ln" href={props.source}>
            SOURCE
            <BiCodeBlock className="demo-source-icon" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectDetails;
