import Rating from "../utilities/rating";
import formatCurrency from "../utilities/formatCurrency";

interface Props {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string | undefined;
  rating: Rating;
}

const Card: React.FC<Props> = ({
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  return (
    <div className=" flex items-center justify-center flex-col  max-w-xs h-80 p-2 shadow-md shadow-neutral-200">
      <img className="w-3/6 max-h-auto" src={image} />
      <h1 className="text-md text-center">{title}</h1>
      <h2 className="font-bold text-xl text-neutral-500">
        {formatCurrency(price)}
      </h2>
    </div>
  );
};

export default Card;
