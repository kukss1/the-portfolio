import "./Header.css";

import bg from "../../assets/images/pngegg.png";

function Header() {
  return (
    <header className="header_wrapper">
      <h1 className="header_title">Welcome to my portfolio page</h1>
      <img className="header_bg" src={bg} alt="background" />
    </header>
  );
}

export default Header;
