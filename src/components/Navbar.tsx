import { Link } from "react-router-dom";
import { useState } from "react";
import CartLogo from "../assets/Cart";
import Logo from "../assets/Logo.png";
import MenMenu from "./MenMenu";
import WomenMenu from "./WomenMenu";

const Navbar: React.FC = () => {
  const [womanMenuVisibility, setWomanMenuVisibility] = useState<string>(
    "opacity-0 absolute pointer-events-none"
  );

  const [manMenuVisibility, setManMenuVisibility] = useState<string>(
    "opacity-0 absolute pointer-events-none"
  );

  //Expanding Menu Class Presets
  const Manpreset = () => {
    setWomanMenuVisibility(
      "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-0 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-none "
    );
    return "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-100 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-auto ";
  };
  const Womanpreset = () => {
    setManMenuVisibility(
      "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-0 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-none "
    );
    return "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-100 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-auto ";
  };
  //Expanding Menu Class Handlers (Changes the Class of the menu)
  const handleManClass = () => {
    setManMenuVisibility(
      manMenuVisibility ===
        "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-0 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-none "
        ? Manpreset
        : "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-0 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-none "
    );
  };
  const handleWomanClass = () => {
    setWomanMenuVisibility(
      womanMenuVisibility ===
        "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-0 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-none "
        ? Womanpreset
        : "absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-0 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-none "
    );
  };

  return (
    <nav className="bg-white shadow-sm p-2 flex items-center justify-between sticky top-0">
      <Link to="/">
        <img src={Logo} alt="logo" className="w-8 " />
      </Link>
      <div id="links" className="flex items-center ">
        <Link
          to="/"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium relative hover:text-pink-600"
        >
          Home
        </Link>

        <div className=" z-50">
          <button
            onClick={handleManClass}
            className=" p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium hover:text-pink-600"
          >
            Men
          </button>
          <div className={manMenuVisibility}>
            <div>
              <MenMenu />
            </div>
          </div>
        </div>

        <div className=" z-50">
          <button
            onClick={handleWomanClass}
            className=" p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium hover:text-pink-600"
          >
            Women
          </button>
          <div className={womanMenuVisibility}>
            <div>
              <WomenMenu />
            </div>
          </div>
        </div>

        <Link
          to="/brands"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium relative hover:text-pink-600"
        >
          Brands
        </Link>
        <Link
          to="/categories"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium relative hover:text-pink-600"
        >
          Categories
        </Link>

        <Link
          to="/about"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium hover:text-pink-600"
        >
          About
        </Link>
        <span className="text-white bg-pink-400 hover:bg-pink-600 rounded-l-lg cursor-pointer p-2 transition ease-in-out delay-100   duration-200 absolute right-0 top-20 shadow-sm shadow-gray-700">
          <CartLogo />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
