import { useEffect, useState } from "react";
import { getArticlesByTag } from "../newsApi";

import "../newsBody/NewsBody.css";
import load from "../../../../../assets/images/gif/YlWC.gif";

function MediaNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag("politics/politics");
    setArticles(data.data.response.results);
    setIsLoading(false);
  };

  return (
    <>
      <h1 className="news_body_title">Media</h1>

      {isLoading ? (
        <img src={load} alt="load" />
      ) : (
        <div className="newsBody_wrapper">
          {articles.map((article) => {
            return (
              <h4 key={article.id}>
                <a href={article.webUrl} target="_blank" rel="noreferrer">
                  {article.webTitle}
                </a>
              </h4>
            );
          })}
        </div>
      )}
    </>
  );
}

export default MediaNews;
