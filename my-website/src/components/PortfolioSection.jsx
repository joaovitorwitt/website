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
          <a href="#" className="portfolio-card portfolio-card-1">
            <div className="card-image">
              <img src="static/images/finance.png" alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 01</h5>
              <span className="card-subtitle">Untitled description 01</span>
            </div>
          </a>

          <a href="#" className="portfolio-card portfolio-card-2">
            <div className="card-image">
              <img src="{% static 'images/placeholder1.jpg' %}" alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 02</h5>
              <span className="card-subtitle">Untitled description 02</span>
            </div>
          </a>

          <a href="#" className="portfolio-card portfolio-card-3">
            <div className="card-image">
              <img src="{% static 'images/placeholder2.jpg' %}" alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 03</h5>
              <span className="card-subtitle">Untitled description 03</span>
            </div>
          </a>

          <a href="#" className="portfolio-card portfolio-card-4">
            <div className="card-image">
              <img src="{% static 'images/placeholder3.jpg' %}" alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 04</h5>
              <span className="card-subtitle">Untitled description 04</span>
            </div>
          </a>

          <a href="#" className="portfolio-card portfolio-card-5">
            <div className="card-image">
              <img src="{% static 'images/placeholder4.jpg' %}" alt="card1" />
            </div>

            <div className="card-heading">
              <h5 className="card-title">Untitled Project 05</h5>
              <span className="card-subtitle">Untitled description 05</span>
            </div>
          </a>

          <div className="portfolio-card portfolio-card-6 large-button-container">
            <a
              href="{% url 'website:projects' %}"
              className="large-button button-fill"
            >
              See
              <br />
              All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
