export default function Project() {
  return (
    <div class="container">
      <section class="project-wrapper">
        <div class="project-container">
          <div class="project-image-data">
            <img src="{{ project_record.project_image.url }}" alt="" />
          </div>

          <div class="project-data">
            <div class="project-data-main">
              <h2 class="project-data-title">project_record.project_title</h2>
              <p class="project-data-description">
                project_record.project_description
              </p>
            </div>

            <a href="{% url 'website:projects' %}" class="return-projects">
              Return
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
