import { useState, useContext } from "react";

import useFetch from "../hooks/detailFetch";
import gif from "../assets/loading_gif.gif";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import Images from "../types/Details/Images";
import SidePanel from "../components/sidePanel";
import InfoSection from "../components/InfoSection";

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  const { data, loading, error } = useFetch(
    `https://asos2.p.rapidapi.com/products/v3/detail?id=${id}`
  );

  const arr: Images[] = [];

  return (
    <div className=" container mx-auto my-10  shadow-md shadow-neutral-200 grid grid-cols-2">
      <div className="col-span-1">{data && <ImageSlider img={arr} />}</div>
      {loading && <img className="w-20 h-auto" src={gif} alt="gif" />}
      <div className="flex justify-center items-center col-span-1">
        {/* Get Images and push them into  an array */}
        {data &&
          data.media &&
          data.media.images.map((item) => (
            <div className="hidden">{arr.push(item)}</div>
          ))}

        {data && (
          <SidePanel
            price={data.price.current.value}
            name={data.name}
            gender={data.gender}
            variants={data.variants}
            id={data.id}
            images={arr}
          />
        )}
      </div>

      <div className="flex justify-center  col-span-2 row-span-1 ">
        {data && (
          <InfoSection
            brand={data.brand.name}
            description={data.description}
            productCode={data.productCode}
            info={data.info}
          />
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
