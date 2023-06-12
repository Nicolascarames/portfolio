import { useState } from "react";
import { Link } from "react-router-dom";
import enter from "../icons/enterneon.png";
import closeIcon from "../icons/exitneon.png";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <header className="header">
      {menu && (
        <nav className="header_nav">
          <img
            src={menu && closeIcon}
            alt="menu"
            className="header_menu"
            onClick={() => setMenu(!menu)}
          />
          <Link>Proyectos</Link>
          <Link>About me</Link>
          <Link>Contacto</Link>
        </nav>
      )}
      {!menu && (
        <img
          src={enter}
          className="header_menu"
          onClick={() => setMenu(!menu)}
          alt="entrar"
        ></img>
      )}
    </header>
  );
};
