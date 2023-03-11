import { useEffect, useState } from "react";
import { getArticlesByWord } from "./newsApi";
import { NavLink, Route, Routes } from "react-router-dom";
import { TextField, Button, Typography, Paper, Tabs, Tab } from "@mui/material";
import { Box } from "@mui/system";

import NewsBody from "./newsBody/NewsBody";
import SportNews from "./newsSection/Sport";
import PoliticsNews from "./newsSection/Politics";
import MediaNews from "./newsSection/Media";




function News() {
  const [articles, setArticles] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    getData("debates");
  }, []);

  const getData = async (word) => {
    const data = await getArticlesByWord(word);
    setArticles(data.data.response.results);
  };

  const inputHandler = (e) => {
    setSearchWord(e.target.value);
  };

  const btnHandler = (e) => {
    getData(searchWord);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Latest news from all over the world
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchWord}
          onChange={inputHandler}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={btnHandler}>
          Search
        </Button>
      </Box>
      <Paper sx={{ mb: 2 }}>
        <Tabs
          value={articles}
          variant="fullWidth"
        >
          <Tab label="Main Page" component={NavLink} to="/news" />
          <Tab label="Politics" component={NavLink} to="/news/politicNews" />
          <Tab label="Sport" component={NavLink} to="/news/sportNews" />
          <Tab label="Media" component={NavLink} to="/news/mediaNews" />
        </Tabs>
      </Paper>
      <Routes>
        <Route path="/" element={<NewsBody articles={articles} />} />
        <Route path="/politicNews" element={<PoliticsNews />} />
        <Route path="/sportNews" element={<SportNews />} />
        <Route path="/mediaNews" element={<MediaNews />} />
      </Routes>
    </Box>
  );
}

export default News;
