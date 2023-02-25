import { NavLink } from "react-router-dom";

import "./Projects.css";

function Projects() {
  return (
    <div className="projects_wrapper">
      <h1 className="projects_title">Projects</h1>

      <nav className="projects_nav">
        <NavLink to="lucky">Try your luck</NavLink>
        <NavLink to="todo">ToDo with React draggable</NavLink>
        <NavLink to="fetch">Fetching data with interesting user cards</NavLink>
        <NavLink to="calculator">Just calculator</NavLink>
        <NavLink to="news">Live News from The Guardian news portal</NavLink>
        <NavLink to="nasa">wonderful  NASA`s  Photo of Day</NavLink>
      </nav>
    </div>
  );
}

export default Projects;
