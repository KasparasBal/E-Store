import ClosingSymbol from "../assets/ClosingSymbol";
import { useShoppingCart } from "../context/cartContext";
import formatCurrency from "../utilities/formatCurrency";
import ShoppingCartItem from "./ShoppingCartItem";

interface Props {
  setCartIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShoppingCart: React.FC<Props> = ({ setCartIsOpen }) => {
  const { cartItems } = useShoppingCart();
  const array = cartItems.map((item) => item.price * item.quantity);
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  const total = Number((Math.round(sum * 100) / 100).toFixed(2));

  if (cartItems.length === 0) {
    return (
      <div className="transition overflow-y-scroll ease-in-out delay-150 absolute h-screen bg-white shadow-md shadow-neutral-500 w-96 right-0 top-0 z-40 flex flex-col">
        <div
          onClick={() => setCartIsOpen(false)}
          className="hover:text-pink-800 cursor-pointer transition-colors flex justify-end p-2 "
        >
          <ClosingSymbol />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl text-neutral-500">Your Cart Is Empty!</h1>
        </div>
      </div>
    );
  } else {
    return (
      <div className="transition overflow-y-scroll ease-in-out delay-150 absolute h-screen bg-white shadow-md shadow-neutral-500 w-96 right-0 top-0 z-40 flex flex-col">
        <div
          onClick={() => setCartIsOpen(false)}
          className="hover:text-pink-800 cursor-pointer transition-colors flex justify-end p-2 "
        >
          <ClosingSymbol />
        </div>
        <div className="flex justify-center items-center flex-col ">
          {cartItems.map((item) => (
            <ShoppingCartItem key={item.id} {...item} />
          ))}
        </div>

        <div className="flex justify-between items-center p-5">
          <div className=" text-xl">Total: {formatCurrency(total)}</div>
          <div className="bg-pink-500 rounded-md text-white font-bold p-2 cursor-pointer hover:bg-pink-600 ">
            Checkout
          </div>
        </div>
      </div>
    );
  }
};

export default ShoppingCart;
