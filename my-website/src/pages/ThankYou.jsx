import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function ThankYou() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="newsletter-container">
          <div className="thankyou-description">
            <h1 className="title">Thank you!</h1>
            <p>
              Welcome to my newsletter. Thank you for signing up! I greatly
              appreciate your interest in computer science, mathematics, and
              physics.
            </p>
          </div>

          <div className="thankyou-description">
            <h1 className="title">What to expect</h1>
            <p>
              I will provide a monthly content with articles, videos, books, or
              any other useful materials.
            </p>
          </div>

          <div className="thankyou-redirections">
            <Link to={"/"}>Back to the homepage</Link>
            <Link to={"/articles"}>Check out some articles</Link>
          </div>
        </div>
      </div>
    </>
  );
}
