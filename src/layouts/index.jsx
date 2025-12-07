import { Outlet } from "react-router-dom";
import { CiDark } from "react-icons/ci";
import { Navbar } from "../components";
import { Contact } from "../pages";

function MainLayout() {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center container py-4 text-xl mb-20">
        <h2>My-Portifolio</h2>
        <button className="text-2xl">
          <CiDark />
        </button>
      </div>
      {/* herro */}
      <div className="grid lg:flex gap-10 container mt-10 relative">
        <div className="lg:sticky lg:top-20 self-start">
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
