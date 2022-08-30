import { useState, useEffect } from "react";

import LArrow from "../assets/LArrow";
import RArrow from "../assets/RArrow";
import Images from "../types/Details/Images";

interface Props {
  img: Images[];
}

const ImageSlider: React.FC<Props> = ({ img }) => {
  const [index, setIndex] = useState(0);

  const interval: number = 5000;
  const autoPlay: boolean = true;
  let playInterval: any;

  const data = img.map((item) => item.url);
  const ads = [...data];

  function handlePrev() {
    setIndex(index === 0 ? ads.length - 1 : index - 1);
  }

  function handleNext() {
    setIndex(index === ads.length - 1 ? 0 : index + 1);
  }

  return (
    <div className="w-12/12 select-none relative my-2 -z-49 ">
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="w-full h-full"
          src={`https://${ads[index]}`}
          alt="adImage"
        />
      </div>

      <div className="absolute h-full top-1/2 tranform -translate-y-1/2 px-3 flex justify-between w-full opacity-100  transition-opacity z-40">
        <button onClick={handlePrev}>
          <LArrow />
        </button>
        <button onClick={handleNext}>
          <RArrow />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
