import { Link } from "react-router-dom";
import "./Home.css";
import { useState } from "react";
import menuIcon from "../icons/menu.svg";
import closeIcon from "../icons/close.svg";

import { Titulo } from "./Titulo";
import { Skills } from "./Skills";

export const Home = () => {
  const [menu, setMenu] = useState(false);
  return (
    <main className="body">
      <section className="main_home">
        <header className="header">
          {menu && (
            <nav className="header_nav">
              <Link>Proyectos</Link>
              <Link>About me</Link>
              <Link>Contacto</Link>
            </nav>
          )}
          <img
            src={menu ? closeIcon : menuIcon}
            alt="menu"
            className="header_menu"
            onClick={() => setMenu(!menu)}
          />
        </header>
        <article className="titulo_box">
          <Titulo />
        </article>
      </section>
      <section className="main_skills">
        <Skills />
      </section>
    </main>
  );
};
