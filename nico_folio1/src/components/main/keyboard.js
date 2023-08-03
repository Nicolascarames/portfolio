import Spline from "@splinetool/react-spline";
import { Outlet } from "react-router-dom";

export default function Keyboard() {
  return (
    <>
      <div className="keyboard">
        <Spline scene="https://prod.spline.design/KLvLLzQ5lwkiHB7I/scene.splinecode" />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
