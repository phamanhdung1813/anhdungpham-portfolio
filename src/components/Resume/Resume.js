import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ResumeDetails from "./ResumeDetails";
import myResume from "../../Assets/Resume/AnhDungPham_Resume.pdf";
import { VscDesktopDownload } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { BsGithub, BsFillTelephoneInboundFill } from "react-icons/bs";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <br />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="download-rem"
            variant="outline-success"
            href={myResume}
            target="_blank"
          >
            <VscDesktopDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Profiles</h3>
            <ResumeDetails title="ANH DUNG PHAM" content={[]} />

            <div className="resume-item">
              <p className="li-rem">
                <BiWorld style={{ fontSize: "1.3rem" }} /> Website :{" "}
                <a href="https://stanleypham.com/">stanleypham.com</a>
              </p>
              <p className="li-rem">
                <SiLinkedin style={{ fontSize: "1.3rem" }} /> LinkedIn :{" "}
                <a href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/">
                  https://www.linkedin.com/in/anh-dung-pham-38830b1a6/
                </a>
              </p>
              <p className="li-rem">
                <BsGithub style={{ fontSize: "1.3rem" }} /> GitHub:{" "}
                <a href="https://github.com/phamanhdung1813">
                  https://github.com/phamanhdung1813
                </a>
              </p>

              <p style={{ fontSize: "18px", textAlign: "left" }}>
                <BsFillTelephoneInboundFill style={{ fontSize: "1.3rem" }} />{" "}
                Telephone: <a href="tel:+16475759328">(+1) 647-575-9328</a>
              </p>

              <p style={{ fontSize: "18px", textAlign: "left" }}>
                <MdEmail style={{ fontSize: "1.3rem" }} /> Email:{" "}
                <a href="mailto:phamanhdung1813@gmail.com">
                  phamanhdung1813@gmail.com
                </a>
              </p>
            </div>

            <ResumeDetails
              title=""
              content={[
                "Three years Computer System Technology student with solid experience in Networking support and Web development.",
                "Experienced in learning, practicing web applications and demonstrating common networking tasks on cloud platforms.",
                "Strong communication and teamworking skills to contribute to group project development.",
                "To obtain a full-time or part-time position in Networking Technical or Web Developer.",
              ]}
            />

            <h3 className="resume-title">Experiences</h3>
            <ResumeDetails
              title="SERVICE DESK TECHNICIAN "
              date="APRIL 2020 – JULY 2020"
              content={[
                "Providing remote assistance via email, internet calling to help users handle their issues.",
                "Support remote configuration of software and maintain the computer system if any computers get in trouble.",
                "Collaborate with other technicians to research technical problems and information security.",
              ]}
            />

            <ResumeDetails
              title="ACADEMIC ASSISTANT"
              date="APRIL 2021 – AUGUST 2021"
              content={[
                "Responsible for supporting new students figure out the lab’s problem and monitoring the practical process.",
                "Enhancing practical skills by performing basic analyses, evaluating results and contributing to lesson development.",
                "Teamworking skills to research the technical problems on Linux Shell Scripting for practical projects and exchanging experience for new users on network routing analysis.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Skills and Achivements</h3>
            <ResumeDetails
              title="TECHNOLOGY SKILLS AND ABILITIES"
              content={[
                "Proficient with: Java, JavaScript, Spring Boot, ReactJS, MySQL, HTML, CSS.",
                "Experienced with: Cisco Packet Tracer, Docker, Kubernetes, Jenkins, GitHub, Python. ",
                "Knowledgeable on: Amazon AWS, Azure, CentOS 8, Window OS, Spring Microservices.",
              ]}
            />
            <div className="resume-item">
              <p className="li-rem">
                LinkedIn Certificates:{" "}
                <a href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/">
                  https://www.linkedin.com/in/anh-dung-pham-38830b1a6/
                </a>
              </p>
              <p className="li-rem">
                GitHub Source:{" "}
                <a href="https://github.com/phamanhdung1813">
                  https://github.com/phamanhdung1813
                </a>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <ResumeDetails
              title="COMPUTER SYSTEMS TECHNOLOGY | ADVANCED DIPLOMA "
              date="From 2019 - to August 2021"
              content={[
                "Graduating GPA: 3.8/4.0",
                "Awarded President's Honor List: 4.0/4.0 (4 semesters)",
                "Udemy, Coursera, LinkedIn certifications.",
              ]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            className="download-rem"
            variant="outline-success"
            href={myResume}
            target="_blank"
          >
            <VscDesktopDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
