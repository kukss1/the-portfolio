import { useEffect, useState } from "react";
import { getArticlesByWord } from "./newsApi";
import { NavLink, Route, Routes } from "react-router-dom";

import NewsBody from "./newsBody/NewsBody";
import SportNews from "./newsSection/Sport";
import PoliticsNews from "./newsSection/Politics";
import MediaNews from "./newsSection/Media";

import "./News.css";


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
    <div className="news_wrapper">
      <h1>Lastest news from all over the world</h1>
      <input
        type="text"
        value={searchWord}
        onChange={inputHandler}
        className="news_input"
      />
      <button className="news_search_btn" onClick={btnHandler}>
        Search
      </button>
      <nav className="news_nav">
          <NavLink to="/news" className="news_main_page">Main Page</NavLink> 
          <div className="links">
         <NavLink to="/news/politicNews">Politic</NavLink>
         <NavLink to="/news/sportNews">Sport</NavLink>
        <NavLink to="/news/mediaNews">Media</NavLink>
          </div>
      </nav>

              <Routes>
         <Route path="/" element={<NewsBody articles={articles} />}/>
         <Route path="/politicNews" element={<PoliticsNews/>}/>
         <Route path="/sportNews" element={<SportNews />}/>
         <Route path="/mediaNews" element={<MediaNews />}/>
      </Routes>


    </div>
  );
}

export default News;
