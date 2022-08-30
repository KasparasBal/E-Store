import { useState, useEffect } from "react";

import firstImg from "../assets/01.png";
import secondImg from "../assets/03.png";
import thirdImg from "../assets/05.png";
import forthImg from "../assets/06.png";

import LArrow from "../assets/LArrow";
import RArrow from "../assets/RArrow";

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const interval: number = 5000;
  const autoPlay: boolean = true;
  let playInterval: any;

  const ads: string[] = [firstImg, secondImg, thirdImg, forthImg];

  function handlePrev() {
    setIndex(index === 0 ? ads.length - 1 : index - 1);
  }

  function handleNext() {
    setIndex(index === ads.length - 1 ? 0 : index + 1);
  }

  function play() {
    playInterval = setInterval(handleNext, interval);
  }

  useEffect(() => {
    if (autoPlay) {
      play();
    }
    return () => clearInterval(playInterval);
  }, [ads]);

  return (
    <div className="w-10/12 select-none relative my-2 -z-49 ">
      <div className="aspect-w-16 aspect-h-9">
        <img className="w-full h-full" src={ads[index]} alt="adImage" />
      </div>
      <div className="absolute h-full top-1/2 tranform -translate-y-1/2 px-3 flex justify-between w-full opacity-0 hover:cursor-pointer hover:opacity-100 transition-opacity z-2">
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

export default Carousel;
