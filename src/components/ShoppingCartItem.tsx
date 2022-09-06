import { useShoppingCart } from "../context/cartContext";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
  image: string;
  name: string;
  price: number;
};

const ShoppingCartItem = ({
  id,
  quantity,
  price,
  name,
  image,
}: CartItemProps) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeFromCart } =
    useShoppingCart();
  console.log(image);
  return (
    <div className="border-b border-t grid grid-cols-3 px-2 max-h-40 w-full justify-start items-center relative ">
      <img className="h-5/6 mx-2" src={`https://${image}`} />
      <div className=" h-auto flex items-center col-span-2">
        <div className="flex flex-col">
          <div className="font-bold text-xs">{name}</div>
          <div className="flex justify-between items-center">
            {" "}
            <div>{formatCurrency(price)}</div>{" "}
            <div className="font-bold">{formatCurrency(price * quantity)}</div>
          </div>
          <div className="flex items-center justify-start">
            <span
              onClick={() => {
                decreaseItemQuantity(id);
                if (quantity < 2) {
                  removeFromCart(id);
                }
              }}
              className="text-neutral-500 p-2 font-bold hover:text-pink-500 cursor-pointer"
            >
              -
            </span>
            <div className="text-neutral-400 text-sm">x{quantity}</div>
            <span
              onClick={() => {
                increaseItemQuantity(id);
              }}
              className="text-neutral-500 p-2 font-bold hover:text-pink-500 cursor-pointer"
            >
              +
            </span>
          </div>
        </div>

        <button
          onClick={() => removeFromCart(id)}
          className=" hover:bg-red-500 text-neutral-600 hover:text-white transition-colors  p-1 absolute right-0 top-1  text-xs  rounded-md h-5 flex justify-center items-center"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
