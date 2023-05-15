import axios from "axios";
import { useState, useEffect } from "react";
// import { Rating } from "@material-tailwind/react";

function Card() {
  const [searchTitle, setSearchTitle] = useState("");
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3500/data").then((res) => {
      setdata(res.data);
    });
  }, []);

  function handleSearch(e) {
    // e.preventDefault();
    // setSearchTitle(e.target.value);
    // console.log(e.target.value);
    // if (searchTitle.length > 0) {
    //   let dataFilterd = data.filter((ele) => {
    //     if (ele.title == searchTitle) {
    //       return ele;
    //     }
    //   });
    //   setSearchTitle(dataFilterd);
    // }
  }

  return (
    <>
      <h1 className="text-center text-4xl font-bold py-10">Top 100 Movies</h1>
      <form>
        <label>search a movie </label>
        <input
          type="text"
          name="search"
          value={searchTitle}
          className="border-sky-500 outline outline-offset-1"
          onChange={handleSearch}
        />
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-4 py-14 place-items-center gap-x-6 gap-y-6 mx-10">
        {data.map((ele) => {
          return (
            <>
              <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
                <img
                  className="w-full "
                  src={ele.image}
                  alt="Sunset in the mountains"
                />
                <div className="px-4 py-4">
                  <div className="font-bold text-xl mb-2">{ele.title}</div>
                  <p className="text-gray-700 text-base">{ele.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    year: {ele.year}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    rating: {ele.rating}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
                    <a href={ele.trailer} className="text-blue-700">
                      Trailer links
                    </a>
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    director: {ele.director}
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    genre:
                    {ele.genre.map((ele) => {
                      return <> {ele}/</>;
                    })}
                  </span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Card;
