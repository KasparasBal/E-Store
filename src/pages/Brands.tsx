import useFetch from "../hooks/categoryFetch";

import gif from "../assets/loading_gif.gif";

const Brands: React.FC = () => {
  const { data, loading, error } = useFetch(
    `https://asos2.p.rapidapi.com/categories/list`
  );

  return (
    <div className=" container mx-auto w-full ">
      {data && <h1 className="text-3xl font-bold p-2 my-2">Brands</h1>}

      <div className="w-full flex  items-center flex-col">
        {loading && <img className="w-20 h-auto" src={gif} alt="gif" />}
        <div className=" w-5/6 grid grid-cols-5 text-xs">
          {data &&
            data.brands &&
            data.brands.map((item) =>
              item.children.map((child) => {
                return (
                  <div key={child.id}>
                    <div className="p-2 ">
                      {child.content.title && (
                        <div className="">{child.content.title}</div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
        </div>
      </div>
    </div>
  );
};

export default Brands;
