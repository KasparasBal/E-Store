import { Link } from "react-router-dom";
import CartLogo from "../assets/Cart";

import Logo from "../assets/Logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm p-2 flex items-center justify-between">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-8 " />
      </Link>
      <div id="links" className="flex items-center ">
        <Link
          to="/"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium"
        >
          Home
        </Link>
        <Link
          to="/womans"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium"
        >
          Woman's Clothing
        </Link>
        <Link
          to="/mens"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium"
        >
          Men's Clothing
        </Link>
        <Link
          to="/about"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium"
        >
          About
        </Link>
        <span className="text-pink-600 cursor-pointer p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">
          <CartLogo />
        </span>
        <Link
          to="/login"
          className=" text-white px-2 py-1 rounded-md transition ease-in-out delay-100 bg-pink-600 hover:-translate-y-1 hover:scale-110 hover:bg-pink-700 duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
