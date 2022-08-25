import { useState, useEffect } from "react";
import Model from "../utilities/model";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

const Womens: React.FC = () => {
  const { data, loading, error } = useFetch(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
  return (
    <div className="grid grid-cols-4 gap-4 p-10">
      {loading && "...loading"}
      {data &&
        data.map((item: Model, id: number) => {
          return (
            <div key={id}>
              <div>
                <Card
                  category={item.category}
                  description={item.description}
                  id={item.id}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  title={item.title}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Womens;
