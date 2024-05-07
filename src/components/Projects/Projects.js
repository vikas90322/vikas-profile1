import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/ecommers.PNG";
import chatify from "../../Assets/Projects/pharma.PNG";
import transmaa from "../../Assets/Projects/transmaa.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transmaa}
              isBlog={false}
              title="Transmaa"
              description="Transmaa is a comprehensive platform designed to streamline truck fleet management and enhance customer service. Our intuitive website offers powerful tools for truck owners to efficiently manage their vehicles and provide exceptional service to their clients."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Pharmacy"
              description="Pharma is a cutting-edge web application designed to streamline the management of pharmaceutical stores with efficiency and ease. Developed with the latest technologies, Pharma offers a user-friendly interface and robust features tailored to meet the unique needs of pharmacy businesses."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commers"
              description="I am proud to present E-Saree, an elegant eCommerce platform developed with React. E-Saree offers a seamless shopping experience, featuring intuitive navigation, high-quality imagery, and secure checkout. With a focus on user convenience and quality assurance, Saree Haven brings the timeless elegance of sarees to the digital realm, ensuring an exceptional shopping journey for every visitor."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
