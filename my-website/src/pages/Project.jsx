export default function Project() {
  return (
    <div className="container">
      <section className="project-wrapper">
        <div className="project-container">
          <div className="project-image-data">
            <img src="{{ project_record.project_image.url }}" alt="" />
          </div>

          <div className="project-data">
            <div className="project-data-main">
              <h2 className="project-data-title">
                project_record.project_title
              </h2>
              <p className="project-data-description">
                project_record.project_description
              </p>
            </div>

            <a href="{% url 'website:projects' %}" className="return-projects">
              Return
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
