import { Link, NavLink } from "react-router-dom";
// icons
import { CiUser } from "react-icons/ci";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaBlogger } from "react-icons/fa";
// mui
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../Context/ThemeContext";

function Navbar() {
  const [value, setValue] = useState(0);
  const { darkMode } = useContext(Context);
  function useScreenSize() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
  }
  const responsive = useScreenSize();

  return (
    <>
      {responsive > 1024 ? (
        <ul
          className={`${
            darkMode
              ? "bg-gray-800/60 shadow-gray-700/60 shadow-2xl"
              : "bg-white shadow-gray-400 shadow-lg"
          } md:flex md:flex-col gap-5 rounded-2xl py-5 px-4 justify-center items-center text-center sticky top-5 max-md:flex max-md:fixed max-md:bottom-0 max-md:h-24`}
        >
          {/* ABOUT */}
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `rounded-xl p-5 flex flex-col justify-center items-center text-sm transition-all duration-200 ease-linear w-24 ${
                  darkMode
                    ? `${
                        isActive
                          ? "bg-gray-700 text-white scale-110 shadow-gray-700 shadow-2xl"
                          : "bg-gray-400/80 hover:bg-gray-700 hover:text-white"
                      }`
                    : `${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-blue-600 hover:text-white"
                      }`
                }`
              }
            >
              <CiUser className="text-2xl" /> About
            </NavLink>
          </li>

          {/* WEBSITES */}
          <li>
            <NavLink
              to="/websites"
              className={({ isActive }) =>
                `rounded-xl p-5 flex flex-col justify-center items-center text-sm transition-all duration-200 ease-linear w-24 ${
                  darkMode
                    ? `${
                        isActive
                          ? "bg-gray-700 text-white scale-110 shadow-gray-700 shadow-2xl"
                          : "bg-gray-400/80 hover:bg-gray-700 hover:text-white"
                      }`
                    : `${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-blue-600 hover:text-white"
                      }`
                }`
              }
            >
              <IoBriefcaseOutline className="text-2xl" /> Websites
            </NavLink>
          </li>

          {/* BLOG */}
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `rounded-xl p-5 flex flex-col justify-center items-center text-sm transition-all duration-200 ease-linear w-24 ${
                  darkMode
                    ? `${
                        isActive
                          ? "bg-gray-700 text-white scale-110 shadow-gray-700 shadow-2xl"
                          : "bg-gray-400/80 hover:bg-gray-700 hover:text-white"
                      }`
                    : `${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-blue-600 hover:text-white"
                      }`
                }`
              }
            >
              <FaBlogger className="text-2xl" /> Blog
            </NavLink>
          </li>
        </ul>
      ) : (
        <Box className=" fixed bottom-0 left-0 w-full text-xl">
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="About"
              icon={<CiUser />}
              component={Link}
              to="/about"
            />

            <BottomNavigationAction
              label="Websites"
              icon={<IoBriefcaseOutline />}
              component={Link}
              to="/websites"
            />

            <BottomNavigationAction
              label="Blog"
              icon={<FaBlogger />}
              component={Link}
              to="/blog"
            />
          </BottomNavigation>
        </Box>
      )}
    </>
  );
}

export default Navbar;
