import "./Header.css";

import bg from "../../assets/images/pngegg.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header_wrapper">
      <Link to="/"><h1 className="header_title">Welcome to my portfolio page</h1></Link>
      <img className="header_bg" src={bg} alt="background" />
    </header>
  );
}

export default Header;
