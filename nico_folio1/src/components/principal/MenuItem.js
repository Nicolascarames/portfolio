import * as React from "react";
import { motion } from "framer-motion";
import foto from "../../icons/foto.svg";
import proyecto from "../../icons/proyect.svg";
import skill from "../../icons/skill.svg";
import contacto from "../../icons/contacto.svg";
import about from "../../icons/about.svg";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = [
  "var(--yellow)",
  "var(--yellow)",
  "var(--yellow)",
  "var(--yellow)",
  "var(--yellow)",
];
const palabras = ["Proyects", "Skills", "About me", "Contact", "Galery"];
const iconos = [proyecto, skill, about, contacto, foto];

export const MenuItem = ({ i }) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.3, color: colors[i] }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder">
        <img src={iconos[i]} alt={`icono${i}`} className={`icono${i}`} />
      </div>

      <div className="text-placeholder">{palabras[i]}</div>
    </motion.li>
  );
};
