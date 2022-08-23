import { useState, useEffect } from "react";

import firstImg from "../assets/1.jpg";
import secondImg from "../assets/2.jpg";
import thirdImg from "../assets/3.jpg";

import LArrow from "../assets/LArrow";
import RArrow from "../assets/RArrow";

export default function Carousel() {
  const [index, setIndex] = useState(0);

  const interval: number = 5000;
  const autoPlay: boolean = true;
  let playInterval: any;

  const ads: string[] = [firstImg, secondImg, thirdImg];

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
    <div className="w-full select-none relative">
      <div className="aspect-w-16 aspect-h-9">
        <img src={ads[index]} alt="adImage" />
      </div>
      <div className="absolute h-full top-1/2 tranform -translate-y-1/2 px-3 flex justify-between w-full opacity-0 hover:opacity-100 transition-opacity">
        <button onClick={handlePrev}>
          <LArrow />
        </button>
        <button onClick={handleNext}>
          <RArrow />
        </button>
      </div>
    </div>
  );
}
