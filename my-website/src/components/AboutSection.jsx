export default function AboutSection() {
  return (
    <section className="about-me section" id="about-me">
      <div className="container">
        <div className="section-description d-grid">
          <div className="scroll-reveal-left">
            <p className="description">
              I am a <span className="text-bold" id="changing"></span>
            </p>
          </div>
        </div>

        <div className="tech-stack d-grid">
          <div className="tech-stack-item" data-tooltip="HTML5">
            <i className="fa-brands fa-html5"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="CSS">
            <i className="fa-brands fa-css3-alt"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="JavaScript">
            <i className="fa-brands fa-js"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="Angular">
            <i className="fa-brands fa-angular"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="Python">
            <i className="fa-brands fa-python"></i>
          </div>

          <div className="tech-stack-item" data-tooltip="SQL">
            <i className="fa-solid fa-database"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
