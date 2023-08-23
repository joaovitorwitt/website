import Placeholder from "../assets/images/placeholder.png";
import Placeholder2 from "../assets/images/placeholder2.png";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="section-title-container">
          <h2 className="title section-title">Projects</h2>
          <div className="section-subtitle-container">
            <span className="subtitle-number has-sparkles">02</span>
            <h5 className="title section-subtitle">recent</h5>
          </div>
        </div>

        <div className="portfolio-cards d-grid">
          <Link href="#" className="portfolio-card portfolio-card-1">
            <div className="card-image">
              <img src={Placeholder} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 01</h5>
              <span className="card-subtitle">Untitled description 01</span>
            </div>
          </Link>

          <Link href="#" className="portfolio-card portfolio-card-2">
            <div className="card-image">
              <img src={Placeholder2} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 02</h5>
              <span className="card-subtitle">Untitled description 02</span>
            </div>
          </Link>

          <Link href="#" className="portfolio-card portfolio-card-3">
            <div className="card-image">
              <img src={Placeholder} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 03</h5>
              <span className="card-subtitle">Untitled description 03</span>
            </div>
          </Link>

          <Link href="#" className="portfolio-card portfolio-card-4">
            <div className="card-image">
              <img src={Placeholder2} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 04</h5>
              <span className="card-subtitle">Untitled description 04</span>
            </div>
          </Link>

          <Link href="#" className="portfolio-card portfolio-card-5">
            <div className="card-image">
              <img src={Placeholder} alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 05</h5>
              <span className="card-subtitle">Untitled description 05</span>
            </div>
          </Link>

          <div className="portfolio-card portfolio-card-6 large-button-container">
            <Link to={"/projects"} className="large-button button-fill">
              See
              <br />
              All
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
