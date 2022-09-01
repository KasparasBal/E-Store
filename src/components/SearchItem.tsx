import { Link } from "react-router-dom";

interface Props {
  SearchTerm: string;
}

const SearchItem: React.FC<Props> = ({ SearchTerm }) => {
  return (
    <div className="bg-neutral-200 p-1 absolute w-full h-40 flex flex-col">
      {SearchTerm && SearchTerm !== null && SearchTerm !== undefined && (
        <div className="p-2 border-neutral-200 border rounded-md bg-white">
          {SearchTerm}
        </div>
      )}
    </div>
  );
};

export default SearchItem;
