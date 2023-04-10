import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/game.jpg";
import emotion from "../../Assets/Projects/json.jpg";
import editor from "../../Assets/Projects/admin.png";
import chatify from "../../Assets/Projects/signal-r.png";
import suicide from "../../Assets/Projects/film.jpg";
import bitsOfCode from "../../Assets/Projects/news.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Signal-R for Stok Market"
              description="In this project, which was created with Signal-r technology, we can see the instant changes in the user section by simultaneously capturing the data coming from the API."
              ghLink="https://github.com/mert-al/Signal-R-le-Borsa-Verileri-master"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News Website"
              description="In this project, I integrated .NET technology and SQL Server database using MVC architecture. In this way, I created a web application that facilitates access to news and manages news. With the MVC architecture, I developed the different layers of the application independently of each other and developed it quickly and securely with .NET technology. By using a SQL Server database, I ensured that the data was stored and managed securely."
              ghLink="https://github.com/mert-al/merthaber"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Admin Website"
              description="The admin panel is an essential tool for managing a news site. To create this panel, I used MVC architecture again and designed an interface using .NET technology. The admin panel is used to perform a number of admin tasks such as adding, editing or deleting news."
              ghLink="https://github.com/mert-al/merthaber"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Game Systems"
              description="I created such a project to learn patterns in the software language and used the Mvc structure while creating this project."
              ghLink="https://github.com/mert-al/GameSystems"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Film Website"
              description="I created a movie site using the C# programming language. This site is a platform where users can discover and watch many different movies. On the site, I provide users with movie categories, trailers, movie posters and detailed information about the movie."
              ghLink="https://github.com/mert-al/Filmx"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Json Data Import"
              description="In this project, I sent the json-type stock market data from the API to the user part by creating a table and made a request with ajax, so I can catch instant changes in the data.              "
              ghLink="https://github.com/mert-al/Combobox-json-data-import"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
