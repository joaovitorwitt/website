import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section class="get-in-touch" id="contact">
      <div class="container">
        <div class="section-title-container">
          <h2 class="title section-title">Get</h2>
          <div class="section-subtitle-container">
            <span class="subtitle-number has-sparkles">03</span>
            <h5 class="title section-subtitle">in contact</h5>
          </div>
        </div>

        <div class="section-description d-grid">
          <div class="scroll-reveal-left">
            <p class="description">
              Let's work on something <span class="text-bold">interesting</span>
            </p>
          </div>
        </div>

        <div class="form-container">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
