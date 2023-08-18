import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function Projects() {
  return (
    <>
      <Header />
      <div class="container">
        <h1 class="title main-title-projects">
          Explore my personal projects where ideas come to life
        </h1>

        <div class="portfolio-cards d-grid">
          {/* {% for project in projects %} */}
          {/* <!-- BE CAREFUL WHEN LOOP COUNTER GOES BEYOND 6 --> */}
          <a
            href="{% url 'website:project' project.id %}"
            class="portfolio-card portfolio-card-{{ forloop.counter }}"
          >
            <div class="card-image">
              <img src="{{ project.project_image.url }}" alt="card1" />
            </div>

            <div class="card-heading">
              <h5 class="card-title">project.project_title</h5>
              <span class="card-subtitle">project.project_description</span>
            </div>
          </a>
          {/* {% endfor %} */}
        </div>

        <div
          class="large-button-container"
          style={{ marginTop: "3rem", marginBottom: "3rem" }}
        >
          <Link to={"/"} class="large-button button-fill">
            Voltar
          </Link>
        </div>
      </div>
    </>
  );
}
