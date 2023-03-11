import { useEffect, useState } from "react";
import { getArticlesByTag } from "../newsApi";
import CircularProgress from "@mui/material/CircularProgress";
import styled from "@mui/material/styles/styled";

const NewsBodyWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const NewsTitle = styled("h1")({
  fontSize: 36,
  fontWeight: "bold",
  marginBottom: 20,
});

const ArticleTitle = styled("h4")({
  fontSize: 20,
  marginBottom: 10,
});

const ArticleLink = styled("a")({
  textDecoration: "none",
  color: "black",
  "&:hover": {
    textDecoration: "underline",
  },
});

function SportNews() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getArticlesByTag("sport/sport");
    setArticles(data.data.response.results);
    setIsLoading(false);
  };

  return (
    <NewsBodyWrapper>
      <NewsTitle>Sport</NewsTitle>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          {articles.map((article) => {
            return (
              <ArticleTitle key={article.id}>
                <ArticleLink
                  href={article.webUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.webTitle}
                </ArticleLink>
              </ArticleTitle>
            );
          })}
        </div>
      )}
    </NewsBodyWrapper>
  );
}

export default SportNews;
