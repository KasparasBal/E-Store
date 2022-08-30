import formatCurrency from "../utilities/formatCurrency";
import { Link } from "react-router-dom";
import Current from "../types/Details/VariantCPRX";
import Variants from "../types/Details/Variants";

interface Props {
  name: string;
  price: number | null | undefined;
  gender: string;
  variants: Variants[];
}

const SidePanel: React.FC<Props> = ({ name, price, gender, variants }) => {
  return (
    <div className=" flex  flex-col gap-10 p-10">
      <div>
        <h1 className="text-md text-center text-xl ">{name}</h1>
        <h2 className="font-bold text-lg text-neutral-500 py-2">
          {price && formatCurrency(Number(price))}
        </h2>
      </div>
      <h2>
        <b>Gender:</b> {gender}
      </h2>

      <div className="w-full">
        <h2 className="text-md font-bold py-2">Size:</h2>
        <select className="border-2 border-black w-full p-2">
          {variants &&
            variants.map((item) => <option>{item.brandSize}</option>)}
        </select>
      </div>
      <button className="bg-pink-400 text-white hover:bg-pink-600  p-2 rounded-md  transition duration-150 ">
        Add To Cart
      </button>
    </div>
  );
};

export default SidePanel;
