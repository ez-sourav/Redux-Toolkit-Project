import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const suggestions = [
    "Nature",
    "Anime",
    "Travel",
    "Cars",
    "Coding",
    "Space",
  ];

  return (
    <div>
      <SearchBar />

      {query !== "" ? (
        <div>
          <Tabs />
          <ResultGrid />
        </div>
      ) : (
        
        <div className="mt-16 flex flex-col items-center text-center px-4">
          <h2 className="text-xl sm:text-2xl font-medium text-white/90">
            Search photos, videos, and GIFs — all in one place
          </h2>

          <p className="mt-2 text-sm sm:text-base text-white/50">
            Start by typing or try one of these popular searches
          </p>

          
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                onClick={() => dispatch(setQuery(item))}
                className="
                  px-4 py-1.5
                  rounded-full
                  text-sm
                  bg-white/10
                  text-white
                  hover:bg-white/20
                  transition
                  active:scale-95
                "
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
