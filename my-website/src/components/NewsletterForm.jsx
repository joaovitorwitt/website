import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import ScrollReveal from "scrollreveal";

export default function NewsletterForm(email) {
  const navigate = useNavigate();

  const [newsletterData, setNewsletterData] = useState({
    email: "Email Address",
  });

  const [newsletterError, setNewsletterError] = useState({
    email: "",
  });

  function validateNewsletterEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleNewsletterInputChange(e) {
    const { name, value } = e.target;
    setNewsletterData((prevData) => ({ ...prevData, [name]: value }));
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
      method="post"
      className="newsletter-form"
      acceptCharset="UTF-8"
      action="https://www.aweber.com/scripts/addlead.pl"
      onSubmit={handleNewsletterForm}
    >
      <div style={{ display: "none" }}>
        <input type="hidden" name="meta_web_form_id" value="772737528" />
        <input type="hidden" name="meta_split_id" value="" />
        <input type="hidden" name="listname" value="awlist6609873" />
        <input
          type="hidden"
          name="redirect"
          value="https://joaovitorwitt.com/thanks"
          id="redirect_10f1d8217bdab3c638a73541f0499adf"
        />
        <input
          type="hidden"
          name="meta_redirect_onlist"
          value="https://joaovitorwitt.com/newsletter"
        />
        <input type="hidden" name="meta_adtracking" value="My_Web_Form" />
        <input type="hidden" name="meta_message" value="1" />
        <input type="hidden" name="meta_required" value="email" />

        <input type="hidden" name="meta_tooltip" value="email||Email Address" />
      </div>
      <div id="af-form-772737528" className="af-form">
        <div id="af-body-772737528" className="af-body af-standards">
          <div className="af-element">
            <div className="af-textWrap">
              <input
                className="email"
                id="awf_field-116178738"
                type="text"
                name="email"
                value={newsletterData.email}
                onChange={handleNewsletterInputChange}
                tabIndex="500"
                autoComplete="off"
              />
            </div>
            <div className="af-clear"></div>
          </div>
          <div className="af-element buttonContainer">
            <input
              name="submit"
              className="newsletter-btn"
              type="submit"
              value="Subscribe"
              tabIndex="501"
            />
            <div className="af-clear"></div>
          </div>
        </div>
      </div>
      <div style={{ display: "none" }}>
        <img
          src="https://forms.aweber.com/form/displays.htm?id=7OxM7MzsrEwc"
          alt=""
        />
      </div>
    </form>
  );
}
