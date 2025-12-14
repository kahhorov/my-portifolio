import { Link } from "react-router-dom";
import { Context } from "../../Context/ThemeContext";
import { useContext } from "react";
function Website({ webs }) {
  const { darkMode } = useContext(Context);
  return (
    <>
      {webs.map(({ title, webImg, websLink, id }) => {
        return (
          <div
            key={id}
            className={`${
              darkMode
                ? "border-gray-800/20 border bg-gray-800/60 shadow-gray-700/80 shadow-lg"
                : "border-gray-400/20 border bg-gray-200/30 shadow-gray-300 shadow-lg"
            } rounded-2xl md:last:w-full`}
          >
            <div className="overflow-hidden rounded-t-md w-full h-32 md:h-[200px]">
              <Link to={websLink}>
                <img
                  src={webImg}
                  alt={title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-md"
                />
              </Link>
            </div>
            <h2 className="py-2 px-5">{title}</h2>
          </div>
        );
      })}
    </>
  );
}

export default Website;
