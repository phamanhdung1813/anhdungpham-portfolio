import React from "react";
import Card from "react-bootstrap/Card";
import { BiCodeBlock } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";

const ProjectDetails = (props) => {
  const pTech = props.techs.map((tech, i) => (
    <div className="mb-2" style={{ display: "inline-block", padding:"10px", marginLeft:"15px"}} key={i}>
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
      <Card.Body>
        <Card.Title>
          <h4 style={{ textAlign: "center", color: "#38b6f5" }}>
            {props.title}
          </h4>
        </Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text
          style={{ fontSize: "24px", textAlign: "center", color: "#FF6F61" }}
        >
          TECHNOLOGIES
        </Card.Text>

        <div>{pTech}</div>

        <div style={{ textAlign: "center", display:"inline-block" }} className="mb-3">
          <a className="btn btn-outline-success" href={props.visit}>
            DEMO
            <BsQuestion size="3rem" />
          </a>
          {"    "}
          {"    "}
          {"    "}
          <a className="btn btn-link btn-ln" href={props.source}>
            SOURCE
            <BiCodeBlock size="4rem" />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};
export default ProjectDetails;
