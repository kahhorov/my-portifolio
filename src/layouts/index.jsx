// icons
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
// import
import { Outlet } from "react-router-dom";
// components
import { Navbar } from "../components";
import { Contact } from "../pages";
import { useContext } from "react";
import { Context } from "../Context/ThemeContext";

function MainLayout() {
  const { darkMode, setDarkMode } = useContext(Context);
  function changeTheme() {
    setDarkMode(!darkMode);
  }
  return (
    <div
      className={`pb-10 px-3 ${
        darkMode
          ? "bg-gray-800 text-white transition-all duration-300"
          : "bg-white text-black transition-all duration-300"
      }`}
    >
      <div
        className={`flex justify-between items-center container py-4 text-xl mb-20`}
      >
        <h2>My-Portifolio</h2>
        <button className="text-2xl" onClick={changeTheme}>
          {darkMode ? <CiLight /> : <CiDark />}
        </button>
      </div>
      {/* herro */}
      <div className="grid lg:flex gap-10 relative">
        <div className="lg:sticky lg:top-15 self-start">
          <Contact />
        </div>
        <main className="grow">
          <Outlet />
        </main>
        <div>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
