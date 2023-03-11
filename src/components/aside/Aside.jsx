import { Route, Routes} from "react-router-dom";


import Projects from "../projects/Projects";
import Lucky from "../projects/project/lucky/lucky";
import Home from "./home/Home";
import ToDo from "../projects/project/todo/ToDo";
import Calculator from "../projects/project/calculator/Calculator";
import News from "../projects/project/news/News";
import Nasa from "../projects/project/nasa/Nasa";


const Aside = () => {
  return (
    <aside>
      <Projects />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="lucky" element={<Lucky />} />
        <Route path="todo" element={<ToDo />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="news/*" element={<News />} />
        <Route path="/nasa" element={<Nasa />} />
      </Routes>
    </aside>
  );
};

export default Aside;
