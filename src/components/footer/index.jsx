import { Link } from "react-router-dom";

function Footer() {
  return (
    <p className="text-xs text-center py-5 px-5 bg-gray-100 rounded-b-2xl w-full absolute left-0">
      © 2025 Sherjahon. Portfolio loyihasi — texnologiyalar: React, TailwindCSS.
      Hamkorlik va savollar uchun:{" "}
      <Link to={"https://t.me/kohhorov"} className="text-blue-400">
        Telegram
      </Link>
    </p>
  );
}

export default Footer;
