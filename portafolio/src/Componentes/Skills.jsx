import "./Skills.css";
import react from "../icons/react.svg";
import git from "../icons/git.svg";
import java from "../icons/javascript.svg";
import node from "../icons/node.svg";

export const Skills = () => {
  return (
    <>
      <section className="skills">
        <header className="skills_header">
          <h3>Soft skills</h3>
        </header>
        <article className="skills_article">
          <img src={react} alt="react" />
          <img src={node} alt="react" />
          <img src={git} alt="react" />
          <img src={java} alt="react" />
        </article>
      </section>
      <section className="skills">
        <picture></picture>
      </section>
    </>
  );
};
