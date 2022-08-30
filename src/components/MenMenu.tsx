import { Link } from "react-router-dom";

const Menu: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-wrap gap-10 justify-center items-center p-10  flex-col ">
        <div className=" w-screen container flex gap-10  text-xs">
          <div>
            <h2 className="text-xl font-semibold ">Clothes</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-shirts"
              >
                Shirts
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-tshirts-tanks"
              >
                T-Shirts & Tanks
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-pants-chinos"
              >
                Pants & Chinos
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="m-jeans"
              >
                Jeans
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-hoodies-sweatshirts"
              >
                Hoodies & SweatShirts
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-jackets-coats"
              >
                Jackets & Coats
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-loungewear"
              >
                Loungewear
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="m-designer"
              >
                Designer
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="m-suitpants"
              >
                Suit Pants
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-suitvests"
              >
                Suit Vests
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-skinnyfitsuits"
              >
                Skinny Fit Suits
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">Accessories</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-caps"
              >
                Caps
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-bags"
              >
                Bags
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">Shoes</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-sneakers"
              >
                Sneakers
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-boots"
              >
                Boots
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-shoes"
              >
                Shoes
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-loafers"
              >
                Loafers
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-socks"
              >
                Socks
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">ActiveWear</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-running"
              >
                Running
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-outdoors"
              >
                Outdoors
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-lifestyle"
              >
                LifeStyle
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-gym-training"
              >
                Gym & Training
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/m-activewear"
              >
                ActiveWear
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
