import { useState } from "react";
import FormInput from "./FormInput";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  function handleContactForm(e) {
    e.preventDefault();

    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: formData.email
        ? validateEmail(formData.email)
          ? ""
          : "Invalid email"
        : "Email is required",
      message: formData.message ? "" : "Message is required",
    };

    setFormErrors(newErrors);

    // if there is no errors, submit the form
    if (Object.values(newErrors).every((error) => error === "")) {
      console.log(`Form submitted: ${formData}`);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }

  return (
    <form
      onSubmit={handleContactForm}
      action=""
      className="contact-form"
      method="post"
    >
      <div className="input-group">
        <div className="input">
          <FormInput
            type={"text"}
            autocomplete={"off"}
            id={"name"}
            value={formData.name}
            action={handleInputChange}
          />

          <label htmlFor="name" className="input-label">
            Name <span className="required-field">*</span>
          </label>
          <div className="error-message">{formErrors.name}</div>
        </div>

        <div className="input">
          <FormInput
            type={"text"}
            autocomplete={"off"}
            id={"email"}
            value={formData.email}
            action={handleInputChange}
          />
          <label htmlFor="email" className="input-label">
            Email <span className="required-field">*</span>
          </label>
          <div className="error-message">{formErrors.email}</div>
        </div>
      </div>

      <div className="input">
        <FormInput
          type={"text"}
          id={"message"}
          autocomplete={"off"}
          value={formData.message}
          action={handleInputChange}
        />
        <label htmlFor="message" className="input-label">
          Message<span className="required-field">*</span>
        </label>
        <div className="error-message">{formErrors.message}</div>
      </div>

      <button type="submit" className="button form-button button-fill">
        Send Message
      </button>
    </form>
  );
}
