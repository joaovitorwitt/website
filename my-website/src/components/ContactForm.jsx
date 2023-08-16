import FormInput from "./FormInput";

export default function ContactForm() {
  return (
    <form
      action="{% url 'website:home' %}"
      className="contact-form"
      method="post"
    >
      <div className="input-group">
        <div className="input">
          <FormInput type={"text"} autocomplete={"off"} id={"name"} />

          <label htmlFor="name" className="input-label">
            Name <span className="required-field">*</span>
          </label>
        </div>

        <div className="input">
          <FormInput type={"text"} autocomplete={"off"} id={"email"} />
          <label htmlFor="email" className="input-label">
            Email <span className="required-field">*</span>
          </label>
        </div>
      </div>

      <div className="input">
        <FormInput type={"text"} id={"message"} autocomplete={"off"} />
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
