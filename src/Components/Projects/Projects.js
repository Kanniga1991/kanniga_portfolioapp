import React from "react";
import "./Projects.css";
import { Element } from "react-scroll";
import ProjectList from "../ProjectList/ProjectList";

function Projects() {
  const miniprojects = [
    {
      img: "../assests/pro1.jpg",
      title: "USER_REGISTRATION",
      description: "Register and Login page dynamically using ReactJs & NodeJs",
      link: "https://sign-and-login-frontend.netlify.app/",
    },
    {
      img: "../../assests/pro2.jpg",
      title: "SLIDESHOW",
      description:
        " Slideshow of Wheels using HTML and CSS using DOM Manipulation",
      link: "https://kanniga-htmldom-developtask.netlify.app/",
    },
    {
      img: "../../assests/pro3.jpg",
      title: "RECHARGE",
      description: "Recharge page done statically using ReactJs",
      link: "https://react-task1-pricingtable-kanniga.netlify.app/",
    },
    {
      img: "../../assests/pro4.jpg",
      title: "PANCARD",
      description: "Pancard done statically using HTML",
      link: "https://kanniga-pancard-static-html.netlify.app/",
    },
    {
      img: "../../assests/pro5.jpg",
      title: "CSS_PROJECT",
      description: "Static page using Css mainly",
      link: "https://sunnyside-frontend-bykanniga.netlify.app/",
    },
    {
      img: "../../assests/pro6.jpg",
      title: "SHOPPING_CART",
      description: "ReactJs static page for pricing table",
      link: "https://react-task2-staticshoppingcart-kanniga.netlify.app/",
    },
  ];
  return (
    <Element className="project_container" id="projects">
      <h1>MINI PROJECTS</h1>
      <p>Here is the glimpse of mini-projects I have done</p>
      <div className="projects_images">
        {miniprojects.map((project, index) => {
          return (
            <ProjectList
              key={index}
              img={project.img}
              title={project.title}
              link={project.link}
              description={project.description}
            />
          );
        })}
      </div>
    </Element>
  );
}
export default Projects;
