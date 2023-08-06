export default function NewsletterForm() {
  return (
    <form
      action="{% url 'website:newsletter' %}"
      method="post"
      className="newsletter-form"
    >
      <input
        type="text"
        className="email"
        autoComplete="off"
        required
        placeholder="Email Address"
      />

      <input type="submit" value="Subscribe" className="newsletter-btn" />
    </form>
  );
}
