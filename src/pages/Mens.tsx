import Types from "../utilities/types";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

const Mens: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&currency=USD&sizeChema=US&lang=en-US"
  );

  return (
    <div className="flex flex-wrap gap-10 justify-center items-center p-10">
      {loading && "...loading"}
      {data &&
        data.products &&
        data.products.map((item) => {
          return (
            <div>
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
  );
};

export default Mens;
