import { Link } from "react-router-dom";
// import ReactMarkdown from "react-markdown";

// Importing article images
import Header from "../components/Header";

export default function Article() {
  return (
    <>
      <Header />
      <section className="blog-post section-header-offset">
        <div className="blog-post-container container">
          <div className="blog-post-data">
            <h3 className="blog-post-title title">article.title</h3>
            <div className="article-data">
              <span>article.date</span>
            </div>

            <img src={"dsadas"} alt="article" />
          </div>

          <div className="container">
            {/* <ReactMarkdown>{markdownContent}</ReactMarkdown> */}
          </div>
        </div>
      </section>

      <div className="large-button-container" style={{ margin: "3rem 0" }}>
        <Link to={"/articles"} className="large-button button-fill">
          Return
        </Link>
      </div>
    </>
  );
}
