import { useContext } from "react";
import { Context } from "../../Context/ThemeContext";

function WhatDo({ icon, descrip, text, styles }) {
  const { darkMode } = useContext(Context);

  return (
    <div className={styles + " cursor-pointer"}>
      <h2
        className={`${
          darkMode ? "text-gray-100" : "text-blue-400"
        } flex items-center gap-5 text-4xl tracking-[-0.12px] mb-3`}
      >
        {icon}{" "}
        <span
          className={`${
            darkMode ? "text-gray-400" : "text-text-color"
          } text-lg`}
        >
          {descrip}
        </span>
      </h2>
      <p>{text}</p>
    </div>
  );
}

export default WhatDo;
