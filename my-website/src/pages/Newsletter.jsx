import Header from "../components/Header";
import NewsletterForm from "../components/NewsletterForm";

export default function Newsletter() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="newsletter-container">
          <h1 className="newsletter-title title">welcome welcome</h1>
          <p className="newsletter-description">
            Get the latest news on computer science, mathematics, and physics
            delivered directly to your inbox. Stay informed and inspired with
            captivating insights.
          </p>

          <NewsletterForm />
        </div>
      </div>
    </>
  );
}
