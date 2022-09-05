import formatCurrency from "../utilities/formatCurrency";
import Price from "../types/Products/price";
import { Link } from "react-router-dom";

interface Props {
  id: number | undefined;
  name: string | undefined;
  price: Price | undefined;
  colour: string | undefined;
  brandName: string | undefined;
  imageUrl: string | undefined;
  isSellingFast: boolean | undefined;
}

const Card: React.FC<Props> = ({
  id,
  name,
  price,
  colour,
  brandName,
  imageUrl,
  isSellingFast,
}) => {
  return (
    <Link to={`/productDetail/${id}`}>
      <img className="w-64 max-h-auto" src={`https://${imageUrl}`} />
      <div className=" flex items-center justify-center flex-col h-40  w-64  p-2 shadow-md shadow-neutral-200">
        <h1 className="text-md text-center">{name}</h1>
        <h2 className="font-bold text-xl text-neutral-500">
          {price && formatCurrency(Number(price.current.value))}
        </h2>
      </div>
    </Link>
  );
};

export default Card;
