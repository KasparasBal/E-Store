import { useState } from "react";
import MGlass from "../assets/MGlass";
import useFetch from "../hooks/queryFetch";
import SearchItem from "./SearchItem";

const SearchBar = () => {
  const [input, setInput] = useState<string | number>("");
  const { data, loading, error } = useFetch(
    `https://asos2.p.rapidapi.com/v2/auto-complete?q=${input}`
  );
  console.log(data);

  return (
    <div className="relative flex flex-row items-center justify-center bg-neutral-100 border-r border-t border-b rounded-md">
      <input
        className="bg-neutral-100 p-2 rounded-md w-full outline-none border-r-none border-neutral-200 border-l border-t border-b "
        type="text"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <div className="flex justify-center items-center cursor-pointer text-neutral-500 hover:text-black transition-colors">
        <MGlass />
      </div>

      {data &&
        data.suggestionGroups.map((item) =>
          item.suggestions.map((suggestion) => {
            return <SearchItem SearchTerm={suggestion.searchTerm} />;
          })
        )}
    </div>
  );
};

export default SearchBar;
