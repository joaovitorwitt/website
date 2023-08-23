import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Articles() {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "50px",
      duration: 1500,
      easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    });
    sr.reveal(".article", { interval: 200 });
  });

  const [titles, setTitle] = useState([]);

  useEffect(() => {
    async function fetchMarkdownTitles() {
      try {
        const response = await fetch("public/posts");
        const fileNames = await response.text();
        console.log(fileNames);
        const titles = fileNames
          .split("\n")
          .filter((fileName) => fileName.endsWith(".md"))
          .map((fileName) => fileName.replace(".md", ""));
        setTitle(titles);
      } catch (error) {
        console.log(`Error fetching Mardown files: ${error}`);
      }
    }
    fetchMarkdownTitles();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="posts-wrapper">
          {titles.map((title, index) => (
            <Link key={index} className="article" to={`/articles/${title}`}>
              <div className="article-wrapper">
                <div className="posts-article-image-wrapper">
                  {/* <img
                    src={article.image}
                    key={article.id}
                    alt=""
                    className="article-image"
                  /> */}
                </div>

                <div className="article-data-container">
                  <div className="article-data">
                    {/* <span>{article.date}</span> */}
                    <span className="article-data-spacer"></span>
                  </div>

                  <h3 className="article-title">{title}</h3>
                  {/* <p className="article-description">{article.description}</p> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
