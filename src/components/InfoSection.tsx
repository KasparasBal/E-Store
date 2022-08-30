import parse from "html-react-parser";
import Info from "../types/Details/Info";

interface Props {
  description: string;
  productCode: string;
  brand: string;
  info: Info;
}

const InfoSection: React.FC<Props> = ({
  description,
  brand,
  productCode,
  info,
}) => {
  return (
    <div className=" grid grid-cols-5 p-5 gap-10 items-start ">
      <div className="flex flex-col gap-5">
        <h2>
          <span className="font-bold text-md text-neutral-500 mr-2">
            Brand:
          </span>
          {brand}
        </h2>
        <div>
          <span className="font-bold text-md text-neutral-500">
            Product Code:
          </span>
          <h4 className="text-sm">{productCode}</h4>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-md text-neutral-500 mb-2">
          Product Details:
        </h2>
        {description && parse(description)}
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-md text-neutral-500 ">Size&Fit</h2>
        <p className="p-2 text-center">
          {(info.sizeAndFit && parse(info.sizeAndFit)) || "-"}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center ">
        <h2 className="font-bold text-md text-neutral-500">Look After Me</h2>

        <p className="p-2 text-center">
          {info.careInfo && parse(info.careInfo)}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2 className="font-bold text-md text-neutral-500">About Me</h2>
        <ul className="p-2 text-center">
          {parse(info.aboutMe) || info.aboutMe}
        </ul>
      </div>
    </div>
  );
};

export default InfoSection;
