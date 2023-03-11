import { useEffect, useState } from "react";
import { getArticlesByTag } from "../newsApi";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

function PoliticsNews() {
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
      <Typography variant="h3" sx={{ mt: 3 }}>
        Politics
      </Typography>
      {isLoading ? (
        <Stack sx={{ mt: 3 }} direction="row" alignItems="center">
          <CircularProgress />
          <Typography>Loading articles...</Typography>
        </Stack>
      ) : (
        <Stack sx={{ mt: 3 }} spacing={1}>
          {articles.map((article) => {
            return (
              <Typography key={article.id} variant="h6" component="div">
                <Link href={article.webUrl} target="_blank" rel="noreferrer">
                  {article.webTitle}
                </Link>
              </Typography>
            );
          })}
        </Stack>
      )}
    </>
  );
}

export default PoliticsNews;
