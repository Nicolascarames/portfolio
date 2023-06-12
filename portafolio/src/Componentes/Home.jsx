import { Titulo } from "./Titulo";
import { Skills } from "./Skills";
import { Header } from "./Header";
import "./Home.css";

export const Home = () => {
  return (
    <main className="home">
      <section className="main_segundo parallax bg1 ">
        <Titulo />
      </section>

      <section className="main_home no_parallax">
        <Header />
      </section>

      <section className="main_segundo parallax bg2 ">
        <h1>fondo fijo 1</h1>
      </section>

      <section className="main_segundo parallax bg3">
        <h1>fondo fijo 2</h1>
      </section>

      <section className="main_tercero no_parallax">
        <Skills />
      </section>
    </main>
  );
};
