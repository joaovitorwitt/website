import { Link } from "react-router-dom";

export default function Article() {
  return (
    <>
      <section class="blog-post section-header-offset">
        <div class="blog-post-container container">
          <div class="blog-post-data">
            <h3 class="blog-post-title title">article_record.article_title</h3>
            <div class="article-data">
              <span>article_record.created_at|date:F j, Y</span>
              {/* <!-- <span class="article-data-spacer"></span> --> */}
              {/* <!-- <span>4 Min read</span> --> */}
            </div>

            <img src="{{ article_record.article_image.url }}" alt="" />
          </div>

          <div class="container">
            <p>rticle_record.article_content | safe</p>
          </div>
        </div>
      </section>

      <div class="large-button-container" style={{ margin: "3rem 0" }}>
        <Link to={"/articles"} class="large-button button-fill">
          Voltar
        </Link>
      </div>
    </>
  );
}
