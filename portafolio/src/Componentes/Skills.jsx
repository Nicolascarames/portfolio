import react from "../icons/react.svg";
import git from "../icons/git.svg";
import java from "../icons/javascript.svg";
import node from "../icons/node.svg";

export const Skills = () => {
  return (
    <>
      <section className="skills skills1">
        <header className="skills_header">
          <h3>Skills</h3>
        </header>
        <article className="skills_article">
          <img src={react} alt="react" />
          <img src={node} alt="react" />
          <img src={git} alt="react" />
          <img src={java} alt="react" />
        </article>
      </section>
      <section className="skills skills2">
        <header className="skills_header">
          <h3>Proyects</h3>
        </header>
        <picture></picture>
      </section>
      <section className="skills skills3">
        <header className="skills_header">
          <h3>About</h3>
        </header>
        <picture></picture>
      </section>
    </>
  );
};
