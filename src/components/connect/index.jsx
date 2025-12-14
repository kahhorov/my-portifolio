import { useContext } from "react";
import { Context } from "../../Context/ThemeContext";

function Connect({ icon, text, info }) {
  const { darkMode } = useContext(Context);
  return (
    <li className="flex gap-4 items-center text-sm border-gray-300 border-b pb-4">
      <div
        className={`${
          darkMode
            ? "bg-gray-500 shadow-gray-600 shadow-lg  hover:bg-gray-400"
            : "bg-white shadow-gray-300 shadow-lg  hover:bg-blue-400"
        } text-2xl py-2 px-2 rounded-lg cursor-pointer group transition-all duration-200`}
      >
        {icon}
      </div>
      <div>
        <p
          className={`${
            darkMode ? "text-gray-400" : "text-gray-400/40"
          } font-thin`}
        >
          {text}
        </p>
        <p
          className={`${
            darkMode ? "text-gray-200" : "text-gray-700"
          } font-normal`}
        >
          {info}
        </p>
      </div>
    </li>
  );
}

export default Connect;
