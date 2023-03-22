import React from 'react';
import '../css/projects.css';
import data from '../data';

function Projectcard(props) {
  return (
    <div className="project-card">
      <div className="front-card">
        <div className="pro-img-container">
          <img src={props.proObj.img} alt={props.proObj.title} />
        </div>
        <div className="project-title">{props.proObj.title}</div>
        <div className="hover-items">
          <h3>{props.proObj.title}</h3>
         <p>{props.proObj.description}</p>
          <div className="icons">
            <a
              href="https://github.com/JAWAHARSRINIVAS"
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
function Service(props) {
  return (
    <div className="service-card">
      <div className="enclosing-service-front-card">
        <div className="service-front-card">
          <div className="service-title">{props.serObj.name}</div>
        </div>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="my-projects">
      <div className="title">
        <div className="bg-text">Myprojects</div>
        <div className="main-text">
          My <span>Projects</span>
        </div>
      </div>
      <div className="port-text">
        Here is some of my projects that I've done in various frameworks
      </div>
      <div className="projects-list">
        {data.projects.map((project) => (
          <Projectcard key={project.id} proObj={project}></Projectcard>
        ))}
      </div>
      <div className="title">
        <div className="bg-text">Myservices</div>
        <div className="main-text">
          My <span>SErvices</span>
        </div>
      </div>
      <div className="service-list">
        {/* {data.services.map((service) => (
          <Service key={service.name} serObj={service}></Service>
        ))} */}
      </div>
    </div>
  );
}

export default Projects;
