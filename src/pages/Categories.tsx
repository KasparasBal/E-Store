import useFetch from "../hooks/categoryFetch";
import gif from "../assets/loading_gif.gif";

const Categories: React.FC = () => {
  const { data, loading, error } = useFetch(
    `https://asos2.p.rapidapi.com/categories/list`
  );

  return (
    <div className=" container mx-auto w-full ">
      <div className="w-full flex  items-center flex-col">
        {data && <h1 className="text-3xl font-bold p-2 my-2">Categories</h1>}
        {loading && <img className="w-20 h-auto" src={gif} alt="gif" />}
        <div className=" w-5/6 grid grid-cols-5 text-xs">
          {data &&
            data.navigation &&
            data.navigation.map((item) =>
              item.children.map((child) =>
                child.children.map((child2) =>
                  child2.children.map((child3) =>
                    child3.children.map((child4) => {
                      return (
                        <div
                          key={child4.id}
                          className="border-4 border-blue-500"
                        >
                          <div className="p-2 ">
                            {child4.content.title && (
                              <div className="bg-green-500 p-2 text-white border-2 border-black m-2">
                                {child4.content.title}
                              </div>
                            )}
                          </div>
                          <div>
                            {child4.link.categoryId && (
                              <div className="bg-red-500 p-2 text-white border-2 border-black m-2">
                                {child4.link.categoryId}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )
                )
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Categories;
