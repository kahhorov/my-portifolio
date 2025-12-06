function Connect({ icon, text, info }) {
  return (
    <li className="flex gap-4 items-center text-sm border-gray-300 border-b pb-4">
      <div className="text-2xl bg-white py-2 px-2 rounded-lg shadow-gray-300 shadow-lg hover:bg-blue-400 group transition-all duration-200">
        {icon}
      </div>
      <div>
        <p className="text-gray-400/40 font-thin">{text}</p>
        <p className="font-normal text-gray-700">{info}</p>
      </div>
    </li>
  );
}

export default Connect;
