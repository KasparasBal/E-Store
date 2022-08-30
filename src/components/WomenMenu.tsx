import { Link } from "react-router-dom";
import useFetch from "../hooks/categoryFetch";

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
                to="/w-shirts"
              >
                Shirts
              </Link>

              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-croptops"
              >
                Crop Tops
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-pants-leggings"
              >
                Pants & Leggings
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-jeans"
              >
                Jeans
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-dresses"
              >
                Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-coats"
              >
                Coats
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-hoodies"
              >
                Hoodies & SweatShirts
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">Dresses</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-summerdresses"
              >
                Summer Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-whitedresses"
              >
                White Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-partydresses"
              >
                Party Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-formaldresses"
              >
                Formal Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-blackdresses"
              >
                Black Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-shirtdresses"
              >
                Shirt Dresses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-floraldresses"
              >
                Floral Dresses
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">Accessories</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-caps"
              >
                Caps
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-backpacks"
              >
                Backpacks
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-sunglasses"
              >
                Sunglasses
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-hats"
              >
                Hats
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-bracelets"
              >
                Bracelets
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-earrings"
              >
                Earrings
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-necklaces"
              >
                Necklaces
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-rings"
              >
                Rings
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">Shoes</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="#"
              >
                Sneakers
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="#"
              >
                Boots
              </Link>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold ">ActiveWear</h2>
            <hr className="w-40 bg-neutral-500 h-0.5 my-2"></hr>
            <ul className="flex justify-start items-start flex-col ">
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-running"
              >
                Running
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-outdoors"
              >
                Outdoors
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-yoganstudio"
              >
                Yoga & Studio
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-gymntraining"
              >
                Gym & Training
              </Link>
              <Link
                className="p-2 transition ease-in-out hover:font-bold  hover:scale-110  duration-300"
                to="/w-swimwearnbeachwear"
              >
                Swimwear & Beachwear
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
