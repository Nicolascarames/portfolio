import Spline from "@splinetool/react-spline";
import "./skillsBack.css";
import { useState } from "react";

export default function SkillsBack() {
  const [boton, setBoton] = useState(true);

  const handleClick = () => {
    setBoton(!boton);
  };

  return (
    <div className="contenedor_skills">
      <button onClick={handleClick} className="boton_skills">
        skills
      </button>
      <div className="div_skills">
        {/* <Spline scene="https://prod.spline.design/oec4ivlMFXiZJtgG/scene.splinecode" /> */}
        {boton && (
          <Spline scene="https://prod.spline.design/6S7RdDV5dKcDm3ZC/scene.splinecode" />
        )}
      </div>
    </div>
  );
}
