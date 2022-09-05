import { Link } from "react-router-dom";

interface Props {
  SearchTerm: string;
  numberOfResults: number;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInput: React.Dispatch<React.SetStateAction<string | number>>;
}

const SearchItem: React.FC<Props> = ({
  SearchTerm,
  numberOfResults,
  setIsOpen,
  setInput,
}) => {
  return (
    <Link
      to={`/Product/?q=${SearchTerm}/resNum=${numberOfResults}`}
      onClick={() => {
        setIsOpen(false);
        setInput("");
      }}
      className=" flex items-center justify-center m-2"
    >
      {SearchTerm && SearchTerm !== null && SearchTerm !== undefined && (
        <div className="p-2 border-neutral-200 border rounded-md w-5/6  bg-white flex justify-between cursor-pointer hover:shadow-md hover:shadow-neutral-400">
          <div className="font-semibold">{SearchTerm}</div>
          <div className="text-pink-600">
            <span className="text-neutral-400 px-1">Results:</span>
            {numberOfResults}
          </div>
        </div>
      )}
    </Link>
  );
};

export default SearchItem;
