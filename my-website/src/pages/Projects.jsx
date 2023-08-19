import { Link } from "react-router-dom";
import Header from "../components/Header";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
// project images
import physicsEngine from "../assets/images/project-images/physics-project.png";
import blockchainProject from "../assets/images/project-images/blockchain-project.png";
import productivityApp from "../assets/images/project-images/productivity-app.png";
import verticalAI from "../assets/images/project-images/vertical-ai.png";
import academicScraper from "../assets/images/project-images/academic-scraper.png";
import highLevel from "../assets/images/project-images/high-level-project.png";

export default function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".main-title-projects", { origin: "top" });
    sr.reveal(".portfolio-card", { interval: 200 });
  });

  // TODO - add field for a more detailed description for the individual page
  // TODO - come up with mathematical formula to always get results in the range of 6
  const projects = [
    {
      id: 1,
      title: "Physics Engine",
      description: "Description",
      image: physicsEngine,
    },
    {
      id: 2,
      title: "Productivity App",
      description: "Productivity app. Powered by Django and React",
      image: productivityApp,
    },
    {
      id: 3,
      title: "Academic Paper Scraper",
      description:
        "Gather all scientific information from the community all in one place.",
      image: academicScraper,
    },
    {
      id: 4,
      title: "Some vertical AI project",
      description: "description for my vertical ai project",
      image: verticalAI,
    },
    {
      id: 5,
      title: "Some Blockchain project",
      description: "description for my Blockchain project",
      image: blockchainProject,
    },
    {
      id: 6,
      title: "another high level project",
      description: "description for my high level project",
      image: highLevel,
    },
  ];

  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title main-title-projects">
          Explore my personal projects where ideas come to life
        </h1>

        <div className="portfolio-cards d-grid">
          {/* <!-- BE CAREFUL WHEN LOOP COUNTER GOES BEYOND 6 --> */}
          {projects.map((project, index) => (
            <Link
              href="{% url 'website:project' project.id %}"
              className={"portfolio-card portfolio-card-" + project.id}
              key={project.id}
            >
              <div className="card-image">
                <img src={project.image} alt="card1" />
              </div>

              <div className="card-heading">
                <h5 className="card-title">{project.title}</h5>
                <span className="card-subtitle">{project.description}</span>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="large-button-container"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Link to={"/"} className="large-button button-fill">
            Return
          </Link>
        </div>
      </div>
    </>
  );
}
