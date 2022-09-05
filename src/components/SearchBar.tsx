import { useEffect, useState, useRef } from "react";
import MGlass from "../assets/MGlass";
import useFetch from "../hooks/queryFetch";
import SearchItem from "./SearchItem";
import useClickOutside from "../hooks/useClickOutside";

const SearchBar = () => {
  const [input, setInput] = useState<string | number>("");
  const [searchText, setSearchText] = useState<string | number>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data, loading, error } = useFetch(
    `https://asos2.p.rapidapi.com/v2/auto-complete?q=${searchText}`
  );

  const handleSearch = () => {
    setSearchText(input);
    setIsOpen(true);
  };

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <div className="flex flex-row items-center justify-center bg-neutral-100 border-r border-t border-b rounded-md">
      <form className="relative w-full">
        <input
          className=" bg-neutral-100 p-2 rounded-md w-full outline-none border-r-none border-neutral-200 border-l border-t border-b "
          type="text"
          placeholder="Search..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        {isOpen === true && (
          <div
            ref={domNode}
            className="absolute top-10 w-full shadow-md shadow-neutral-500 bg-neutral-100"
          >
            {data &&
              data.suggestionGroups.map((item) =>
                item.suggestions.map((suggestion, i) => {
                  return (
                    <SearchItem
                      setInput={setInput}
                      setIsOpen={setIsOpen}
                      key={i}
                      SearchTerm={suggestion.searchTerm}
                      numberOfResults={suggestion.numberOfResults}
                    />
                  );
                })
              )}
          </div>
        )}
      </form>
      <div
        onClick={handleSearch}
        className="flex justify-center px-2 items-center cursor-pointer text-neutral-500 hover:text-black transition-colors"
      >
        <MGlass />
      </div>
    </div>
  );
};

export default SearchBar;
