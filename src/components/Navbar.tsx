import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import CartLogo from "../assets/Cart";
import Logo from "../assets/Logo.png";
import MenMenu from "./MenMenu";
import WomenMenu from "./WomenMenu";
import SearchBar from "./SearchBar";
import useClickOutside from "../hooks/useClickOutside";
import ShoppingCart from "./ShoppingCart";
import { useShoppingCart } from "../context/cartContext";

const Navbar: React.FC = () => {
  const [isWomanOpen, setIsWomanOpen] = useState<boolean>(false);
  const [isManOpen, setIsManOpen] = useState<boolean>(false);
  const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
  const { cartQuantity } = useShoppingCart();

  let domNode = useClickOutside(() => {
    setIsWomanOpen(false);
    setIsManOpen(false);
    setCartIsOpen(false);
  });

  return (
    <nav className="bg-white shadow-sm p-2 flex items-center justify-between sticky top-0 z-30">
      {cartIsOpen === true && (
        <div ref={domNode} className="absolute top-0 right-0 ">
          <ShoppingCart setCartIsOpen={setCartIsOpen} />
        </div>
      )}
      <Link to="/">
        <img src={Logo} alt="logo" className="w-8 " />
      </Link>
      <div className="w-3/6">
        <SearchBar />
      </div>
      <div id="links" className="flex items-center ">
        <Link
          to="/"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium relative hover:text-pink-600"
        >
          Home
        </Link>

        <div className=" z-35">
          <button
            onClick={() => {
              isManOpen === false ? setIsManOpen(true) : setIsManOpen(false);
            }}
            className=" p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium hover:text-pink-600"
          >
            Men
          </button>
          {isManOpen === true && (
            <div
              ref={domNode}
              className="absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-100 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-auto "
            >
              <div>
                <MenMenu setIsOpen={setIsManOpen} isOpen={isManOpen} />
              </div>
            </div>
          )}
        </div>

        <div className=" z-35">
          <button
            onClick={() => {
              isWomanOpen === false
                ? setIsWomanOpen(true)
                : setIsWomanOpen(false);
            }}
            className=" p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium hover:text-pink-600"
          >
            Women
          </button>
          {isWomanOpen === true && (
            <div
              ref={domNode}
              className="absolute  right-0  top-full bg-white p-2 rounded-sm shadow-lg shadow-neutral-500 opacity-100 transition-opacity duration-150 transform duration-150ms ease-in-out  pointer-events-auto "
            >
              <div>
                <WomenMenu setIsOpen={setIsWomanOpen} isOpen={isWomanOpen} />
              </div>
            </div>
          )}
        </div>

        <Link
          to="/about"
          className="p-2 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200 hover:font-medium hover:text-pink-600"
        >
          About
        </Link>
        <div
          onClick={() => setCartIsOpen(true)}
          className="text-white bg-pink-400 hover:bg-pink-600 rounded-l-lg cursor-pointer p-2 transition ease-in-out delay-100   duration-200 absolute right-0 top-20 shadow-sm shadow-gray-700"
        >
          <CartLogo />
          <span className="absolute -bottom-2 -left-3 bg-red-500 p-2 rounded-full text-sm h-6 flex items-center justify-center shadow-sm shadow-gray-700">
            {cartQuantity}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
