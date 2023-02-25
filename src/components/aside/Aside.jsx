import { Route, Routes, Link } from "react-router-dom";
import "./Aside.css";

import About from "../about/About";
import Projects from "../projects/Projects";
import Lucky from "../projects/project/lucky/lucky";
import Home from "./home/Home";
import ToDo from "../projects/project/todo/ToDo";
import Calculator from "../projects/project/calculator/Calculator";
import News from "../projects/project/news/News";
import Nasa from "../projects/project/nasa/Nasa";

const Aside = () => {
  return (
    <aside className="section">
      <Projects />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> <About />
            </>
          }
        />
        <Route
          path="lucky"
          element={
            <>
              <Lucky />{" "}
              <div className="back_btn">
                <Link to="/">Back</Link>
              </div>
            </>
          }
        />
        <Route
          path="todo"
          element={
            <>
              <ToDo />{" "}
              <div className="back_btn">
                <Link to="/">Back</Link>
              </div>{" "}
            </>
          }
        />
        <Route
          path="calculator"
          element={
            <>
              <Calculator />
              <div className="back_btn">
                <Link to="/">Back</Link>
              </div>{" "}
            </>
          }
        />
        <Route
          path="news/*"
          element={
            <>
              <News />
              <div className="back_btn">
                <Link to="/">Back</Link>
              </div>{" "}
            </>
          }
        />
        <Route
          path="/nasa"
          element={
            <>
              <Nasa />
              <div className="back_btn">
                <Link to="/">Back</Link>
              </div>{" "}
            </>
          }
        />
      </Routes>
    </aside>
  );
};

export default Aside;
