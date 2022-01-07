import React from "react";

function ResumeDetails(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <ul>
        {props.content.map((value, index) => (
          <li style={{fontSize:"18px", textAlign:"left"}} key={index}>• {value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResumeDetails;
