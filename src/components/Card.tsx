import Rating from "../utilities/rating";
import formatCurrency from "../utilities/formatCurrency";
import Price from "../utilities/price";

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
  name,
  price,
  colour,
  brandName,
  imageUrl,
  isSellingFast,
}) => {
  return (
    <>
      <img className="w-64 max-h-auto" src={`https://${imageUrl}`} />
      <div className=" flex items-center justify-center flex-col  w-64  p-2 shadow-md shadow-neutral-200">
        <h1 className="text-md text-center">{name}</h1>
        <h2 className="font-bold text-xl text-neutral-500">
          {price && formatCurrency(Number(price.current.value))}
        </h2>
      </div>
    </>
  );
};

export default Card;
