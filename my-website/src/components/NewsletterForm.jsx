import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import ScrollReveal from "scrollreveal";

export default function NewsletterForm(email) {
  const navigate = useNavigate();

  const [newsletterData, setNewsletterData] = useState({
    email: "",
  });

  const [newsletterError, setNewsletterError] = useState({
    email: "",
  });

  function validateNewsletterEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleNewsletterInputChange(e) {
    const { id, value } = e.target;
    setNewsletterData((prevData) => ({ ...prevData, [id]: value }));
  }

  function removeErrorFromScreen() {
    setInterval(() => {
      setNewsletterError("");
    }, 5000);
  }

  function handleNewsletterForm(e) {
    e.preventDefault();

    const newErrors = {
      email: newsletterData.email
        ? validateNewsletterEmail(newsletterData.email)
          ? ""
          : "Invalid email"
        : "Email is required",
    };

    setNewsletterError(newErrors);
    removeErrorFromScreen();

    if (Object.values(newErrors).every((error) => error === "")) {
      console.log(`Form submitted: ${newsletterData}`);

      setNewsletterData({
        email: "",
      });

      // TODO - redirect to thank you page
      navigate("/thankyou");
    }
  }

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
      onSubmit={handleNewsletterForm}
    >
      <FormInput
        classname={"email"}
        id={"email"}
        type={"text"}
        autocomplete={"off"}
        placeholder={"Email Address"}
        value={newsletterData.email}
        action={handleNewsletterInputChange}
      />

      <div className="error-message">{newsletterError.email}</div>

      <input type="submit" value="Subscribe" className="newsletter-btn" />
    </form>
  );
}
