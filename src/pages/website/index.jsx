import { Web } from "../../components";
import { v4 as uuid4 } from "uuid";
const webs = [
  {
    webImg: "/website-todo.png",
    websLink: "https://todo-react-eta-ashy.vercel.app/",
    title: "Todo",
    text: "Texnalogiyalar: React,Tailwindcss,Mui/Ui",
    id: uuid4(),
  },
  {
    webImg: "/web-userList.png",
    websLink: "https://users-router-t3ko.vercel.app/",
    title: "UserList",
    text: "Texnalogiyalar: React,Tailwindcss,Mui/Ui",
    id: uuid4(),
  },
  {
    webImg: "/web-jobs.png",
    websLink: "https://job-gray-two.vercel.app/",
    title: "Jobs",
    text: "Texnalogiyalar: React,Tailwindcss",
    id: uuid4(),
  },
  {
    webImg: "/website-todo.png",
    websLink: "https://shop-webs.vercel.app/",
    title: "Shop",
    text: "Texnalogiyalar: Html,css,js",
    id: uuid4(),
  },
  {
    webImg: "/typing.png",
    websLink: "https://typing-game-nine-black.vercel.app/",
    title: "Typing-Game",
    text: "Texnalogiyalar: Html,css,js",
    id: uuid4(),
  },
];

function Website() {
  return (
    <div className="shadow-gray-400 shadow-2xl rounded-2xl py-10 px-10 relative">
      <h1 className="text-3xl relative">
        Websites
        <span className="w-20 h-1 border-blue-600 border-t-4 absolute left-40 translate-y-4 rounded-2xl"></span>
      </h1>
      {/* websites */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 mb-10">
        <Web webs={webs} />
      </div>
      {/* footer */}
    </div>
  );
}

export default Website;
