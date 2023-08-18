import { useEffect } from "react";
import FormInput from "./FormInput";
import ScrollReveal from "scrollreveal";

export default function NewsletterForm() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".newsletter-form", { origin: "bottom" });
  });

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
