import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="flex flex-col gap-5">
      <li>
        <Link to={"/"}>About</Link>
      </li>
      <li>
        <Link to={"/websites"}>Websites</Link>
      </li>
      <li>
        <Link to={"/blog"}>Blog</Link>
      </li>
    </ul>
  );
}

export default Navbar;
