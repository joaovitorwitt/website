import { useEffect } from "react";
import Profile from "../assets/images/profile-picture.jpg";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });

    sr.reveal(".about-me-picture", { origin: "top" });
    sr.reveal(".about-me-data-container", { origin: "right" });
  });

  return (
    <>
      <Header />
      <div className="container">
        <div className="about-me-wrapper">
          <div className="profile-picture">
            <img src={Profile} alt="" className="about-me-picture" />
          </div>

          <div className="about-me-data-container">
            <h3>João Vitor Witt (pronounced: John)</h3>

            <p className="about-me-description">
              I'm enthusiastic about the captivating realms of Web3 and AI.
              While exploring deeper into the Computer Science realm.{" "}
              <Link to={"/articles"} className="article-redirection">
                Check out my articles
              </Link>
            </p>

            <h4 className="about-me-footer">Connect with me</h4>
            <div className="social-media">
              <ul className="list">
                <li className="list-item">
                  <a
                    href="https://github.com/joaovitorwitt"
                    target="_blank"
                    className="list-link"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                </li>

                <li className="list-item">
                  <a
                    href="https://www.youtube.com/channel/UCPeHjk3fEPzK0RKHpQG7gJw"
                    target="_blank"
                    className="list-link"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li className="list-item">
                  <a
                    href="https://www.linkedin.com/in/joaovitorwitt/"
                    target="_blank"
                    className="list-link"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
