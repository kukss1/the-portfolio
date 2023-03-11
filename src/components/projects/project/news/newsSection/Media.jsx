import { useEffect, useState } from "react";
import { getArticlesByTag } from "../newsApi";
import { Box, CircularProgress, Typography, Link } from "@mui/material";

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
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Media
      </Typography>
      {isLoading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : (
        <Box display="flex" flexDirection="column">
          {articles.map((article) => (
            <Box key={article.id} mt={2}>
              <Link href={article.webUrl} target="_blank" rel="noreferrer">
                <Typography variant="h6">{article.webTitle}</Typography>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
}

export default MediaNews;
