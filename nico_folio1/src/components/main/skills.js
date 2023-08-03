import Spline from "@splinetool/react-spline";
import "./skills.css";
import { Outlet } from "react-router-dom";

export default function SplineSkills() {
  return (
    <div className="spline_skills">
      <div className="spline_skill">
        <Spline scene="https://prod.spline.design/D75dLhybbAm1zwko/scene.splinecode" />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
