import { useState } from "react";

import Types from "../../../types/Products/types";
import useFetch from "../../../hooks/productFetch";
import Card from "../../../components/Card";
import gif from "../../../assets/loading_gif.gif";

const Socks: React.FC = () => {
  const [limit, setLimit] = useState<number>(10);

  const store: string = "US";
  const offset: number = 0;
  const categoryId: number = 16329;
  const country: string = "US";
  const currency: string = "USD";
  const sizeSchema: string = "US";
  const language: string = "en-US";

  const handleLimit = () => {
    setLimit(limit + 10);
  };

  const { data, loading, error } = useFetch(
    `https://asos2.p.rapidapi.com/products/v2/list?store=${store}&offset=${offset}&categoryId=${categoryId}&limit=${limit}&country=${country}&currency=${currency}&sizeChema=${sizeSchema}&lang=${language}`
  );

  return (
    <div className="flex flex-col items-center justify-center z-50">
      <div className="flex flex-wrap gap-10 justify-center items-center p-10">
        {loading && <img className="w-20 h-auto" src={gif} alt="gif" />}
        {data &&
          data.products &&
          data.products.map((item) => {
            return (
              <div key={item.id}>
                <Card
                  name={item.name}
                  id={item.id}
                  brandName={item.brandName}
                  colour={item.colour}
                  imageUrl={item.imageUrl}
                  isSellingFast={item.isSellingFast}
                  price={item.price}
                />
              </div>
            );
          })}
      </div>
      {data && (
        <button
          onClick={handleLimit}
          className="bg-pink-500 p-2 mb-10 rounded-md text-white cursor-pointer hover:bg-pink-600"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Socks;
