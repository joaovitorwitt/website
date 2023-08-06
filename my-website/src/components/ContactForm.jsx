export default function ContactForm() {
  return (
    <form
      action="{% url 'website:home' %}"
      className="contact-form"
      method="post"
    >
      <div className="input-group">
        <div className="input">
          <input type="text" id="name" autoComplete="off" required />

          <label htmlFor="name" className="input-label">
            Name <span className="required-field">*</span>
          </label>
        </div>

        <div className="input">
          <input type="text" id="email" autoComplete="off" required />
          <label htmlFor="email" className="input-label">
            Email <span className="required-field">*</span>
          </label>
        </div>
      </div>

      <div className="input">
        <input type="text" id="message" autoComplete="off" required />

        <label htmlFor="message" className="input-label">
          Message<span className="required-field">*</span>
        </label>
      </div>

      <button type="submit" className="button form-button button-fill">
        Send Message
      </button>
    </form>
  );
}
