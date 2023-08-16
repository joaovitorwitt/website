import FormInput from "./FormInput";

export default function NewsletterForm() {
  return (
    <form
      action="{% url 'website:newsletter' %}"
      method="post"
      className="newsletter-form"
    >
      <FormInput
        classname={"email"}
        type={"text"}
        autocomplete={"off"}
        placeholder={"Email Address"}
      />

      <input type="submit" value="Subscribe" className="newsletter-btn" />
    </form>
  );
}
