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
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="outline-success" href={myResume} target="_blank">
            <VscDesktopDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Profiles</h3>
            <ResumeDetails title="ANH DUNG PHAM" content={[]} />

            <div className="resume-item">
            <p style={{ fontSize: "18px", textAlign: "left" }}>
                <BiWorld style={{fontSize:"1.3rem"}}/> Website :{" "}
                <a href="https://stanleypham.com/">
                  stanleypham.com
                </a>
              </p>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                <SiLinkedin style={{fontSize:"1.3rem"}}/> LinkedIn :{" "}
                <a href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/">
                  https://www.linkedin.com/in/anh-dung-pham-38830b1a6/
                </a>
              </p>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
              <BsGithub style={{fontSize:"1.3rem"}}/> GitHub:{" "}
                <a href="https://github.com/phamanhdung1813">
                  https://github.com/phamanhdung1813
                </a>
              </p>

              <p style={{ fontSize: "18px", textAlign: "left" }}>
              <BsFillTelephoneInboundFill style={{fontSize:"1.3rem"}}/> Telephone: <a href="tel:+16475759328">(+1) 647-575-9328</a>
              </p>

              <p style={{ fontSize: "18px", textAlign: "left" }}>
              <MdEmail style={{fontSize:"1.3rem"}}/> Email:{" "}
                <a href="mailto:phamanhdung1813@gmail.com">
                  phamanhdung1813@gmail.com
                </a>
              </p>
            </div>

            <ResumeDetails
              title=""
              content={[
                "Presently graduated in Computer Systems Technology Advanced Diploma Co-op with the solid knowledge of Computer data management, networking technology and seeking for the full-time position on Fresher/Junior Web Developer or Networking Technician Support.",
                "Experienced on studying, practicing Java Spring projects with Spring Boot and RESTful API on Java 8+ with Maven project. Demonstrated networking analysis with Cisco CCNA to solve common network problems, and implement routing on cloud platforms.",
                "Excellent team-working and problem-solving in order to figure out a technical problem and able to work collaboratively in a team for sharing ideas.",
              ]}
            />

            <h3 className="resume-title">Experiences</h3>
            <ResumeDetails
              title="SERVICE DESK TECHNICIAN "
              date="APRIL 2020 – JULY 2020"
              content={[
                "Supporting remote installation of software, computer configuration, trouble shooting the problem by using Window tools",
                "Providing remote assistance via email and Internet calling.",
                "Collaborate with other technicians to maintain the web service once the problems were detected.",
              ]}
            />

            <ResumeDetails
              title="ACADEMIC ASSISTANT"
              date="APRIL 2021 – AUGUST 2021"
              content={[
                "Responsible for supporting new students figure out the labs error.",
                "Helping professor by performing basic problems analysis and evaluating results.",
                "Use communication skills to help students complete their practical lab and develop writing-skill for the lab report.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Skills and Achivements</h3>
            <ResumeDetails
              title="TECHNOLOGY SKILLS AND ABILITIES"
              content={[
                "Programing: Java, Python, JavaScript, HTML, CSS, Bash scripting, MySQL.",
                "Web: Java Spring, React with Redux.",
                "Software: MS Office (Word, Excel, Outlook, PowerPoint), VMware Work Station, Cisco Packet Tracer, Postman, IntelliJ.",
                "DevOps: Docker, Jenkins, CICD, Kubernetes.",
                "Platforms: Amazon AWS, Ubuntu, CentOS 8, Windows platform.",
              ]}
            />
            <div className="resume-item">
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                LinkedIn Certificates:{" "}
                <a href="https://www.linkedin.com/in/anh-dung-pham-38830b1a6/">
                  https://www.linkedin.com/in/anh-dung-pham-38830b1a6/
                </a>
              </p>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                GitHub Source:{" "}
                <a href="https://github.com/phamanhdung1813">
                  https://github.com/phamanhdung1813
                </a>
              </p>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                Project Demo:{" "}
                <Link to="/project">CLICK HERE !!!</Link>
              </p>
            </div>

            

            <h3 className="resume-title">Education</h3>
            <ResumeDetails
              title="COMPUTER SYSTEMS TECHNOLOGY | ADVANCED DIPLOMA "
              date="From 2019 - to August 2021"
              content={["GPA: 3.8/4.0", "Awarded: President's Honours List"]}
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="outline-success" href={myResume} target="_blank">
            <VscDesktopDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
