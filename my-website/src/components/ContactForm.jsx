export default function ContactForm() {
  return (
    <form action="{% url 'website:home' %}" class="contact-form" method="post">
      <div class="input-group">
        <div class="input">
          <input type="text" id="name" autocomplete="off" required />

          <label for="name" class="input-label">
            Name <span class="required-field">*</span>
          </label>
        </div>

        <div class="input">
          <input type="text" id="email" autocomplete="off" required />
          <label for="email" class="input-label">
            Email <span class="required-field">*</span>
          </label>
        </div>
      </div>

      <div class="input">
        <input type="text" id="message" autocomplete="off" required />

        <label for="message" class="input-label">
          Message<span class="required-field">*</span>
        </label>
      </div>

      <button type="submit" class="button form-button button-fill">
        Send Message
      </button>
    </form>
  );
}
