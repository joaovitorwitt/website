import { Link } from "react-router-dom";
// Importing article images
import commitMessagesArticle from "../assets/images/write-commit-messages-right.jpg";
import aiWillTransformEd from "../assets/images/how-ai-will-transform-education.png";
import thinIceAi from "../assets/images/walking-on-thin-ice-ai.png";

export default function Articles() {
  const articles = [
    {
      id: 1,
      title: "How AI Will Transform Education",
      description:
        "Artificial Intelligence in education. Do we actually need to worry and do something or it's all fun and games? Find out here.",
      date: "August 17, 2023",
      image: aiWillTransformEd,
    },
    {
      id: 2,
      title: "Write Commit Messages The Righ Way",
      description:
        "Is it really enough to just know how to code in today's world? Find out how commit messages can impact the dev world.",
      date: "August 04, 2023",
      image: commitMessagesArticle,
    },
    {
      id: 3,
      title: "Walking On Thin Ice With Artificial Intelligence",
      description:
        "Is AI really all that? Should we manage our expectations about AI? Find out about these important questions that are often overlooked regarding Artificial Intelligence.",
      date: "August 01, 2023",
      image: thinIceAi,
    },
  ];
  return (
    <div className="container">
      <div className="posts-wrapper">
        {articles.map((article, index) => (
          <Link key={article.id} className="article" to={""}>
            <div className="article-wrapper">
              <div className="posts-article-image-wrapper">
                <img
                  src={article.image}
                  key={article.id}
                  alt=""
                  className="article-image"
                />
              </div>

              <div className="article-data-container">
                <div className="article-data">
                  <span>{article.date}</span>
                  <span className="article-data-spacer"></span>
                  {/* <span>{index}</span> */}
                </div>

                <h3 className="article-title">{article.title}</h3>
                <p className="article-description">{article.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
