import ProfileImg from "../../assets/profile-img.png";
//icons
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
//
import { Link } from "react-router-dom";
import { Connect } from "../../components";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../Context/ThemeContext";
function Contact() {
  const { darkMode } = useContext(Context);
  return (
    <div
      className={`${
        darkMode
          ? "bg-gray-800 shadow-gray-700/60 shadow-2xl text-white"
          : "bg-white shadow-gray-400 shadow-2xl"
      } rounded-3xl py-5 px-4 relative w-[350px] max-lg:w-full`}
    >
      <div className="flex w-full items-center justify-center">
        <img
          className="flex top-0 left-0 -translate-y-1/2"
          src={ProfileImg}
          alt="my-img"
          style={{ width: "300px" }}
        />
      </div>
      <div className="flex flex-col gap-5 font-bold text-center items-center">
        <h2>Sherjahon Qahhorov</h2>
        <span className="inline-flex items-center rounded-md bg-gray-300/20 px-4 py-3 text-xs font-bold inset-ring inset-ring-gray-300/20 cursor-pointer hover:bg-gray-500/20 transition-all duration-200 ">
          Frontend/Developer
        </span>
        <div className="flex gap-3 text-2xl">
          <Link
            to={"https://instagram.com/kohhorov_ice"}
            className={`${
              darkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-200  text-red-400"
            } py-2 px-2 rounded-2xl`}
          >
            <FaInstagram />
          </Link>
          <Link
            to={"https://t.me/kohhorov"}
            className={`${
              darkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-200  text-blue-400"
            } py-2 px-2 rounded-2xl`}
          >
            <FaTelegramPlane />
          </Link>
          <Link
            to={"https://youtube.com/@kohhorov"}
            className={`${
              darkMode
                ? "bg-gray-700 text-gray-200"
                : "bg-gray-200  text-red-700"
            } py-2 px-2 rounded-2xl`}
          >
            <FaYoutube />
          </Link>
        </div>
      </div>
      <ul
        className={`${
          darkMode ? "bg-gray-700/70" : "bg-gray-200/50"
        } w-full rounded-2xl flex flex-col gap-3 py-4 px-4 mt-5 text-start`}
      >
        <Connect
          icon={
            <IoPhonePortraitOutline
              className={`${
                darkMode
                  ? "text-gray-300"
                  : " text-red-500 group-hover:text-white"
              }  transition-all duration-200`}
            />
          }
          text="phone"
          info="+998: 91 661 27 05"
        />
        <Connect
          icon={
            <MdOutlineAttachEmail
              className={`${
                darkMode
                  ? "text-gray-300"
                  : " text-blue-400 group-hover:text-white"
              }  transition-all duration-200`}
            />
          }
          text="Email"
          info={`sherjahonkohhorov\n@gmail.com`}
        />
        <Connect
          icon={
            <IoLocation
              className={`${
                darkMode
                  ? "text-gray-300"
                  : " text-red-400/70 group-hover:text-white"
              }  transition-all duration-200`}
            />
          }
          text="Location"
          info="Uzbekistan"
        />
        <Connect
          icon={
            <IoCalendarOutline
              className={`${
                darkMode
                  ? "text-gray-300"
                  : " text-violet-600 group-hover:text-white"
              }  transition-all duration-200`}
            />
          }
          text="Birthday"
          info="Iyul 4, 2009"
        />
      </ul>
      <div className="flex w-full justify-center mt-5">
        <Link to={"https://t.me/+CAK22pQceuczMjli"}>
          <Button
            variant={darkMode ? "contained" : "outlined"}
            className="w-full"
          >
            Telegram Group
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;
