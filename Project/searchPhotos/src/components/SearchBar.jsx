
import { setQuery } from "../redux/features/searchSlice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Search, X } from "lucide-react";

const SearchBar = () => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const { query } = useSelector((store) => store.search);
useEffect(() => {
  setText(query);
}, [query]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(setQuery(text));
      
    }
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-5 sm:mt-12 lg:mt-6">
      <form onSubmit={submitHandler} className="max-w-4xl mx-auto">
        <div className="relative">
          <div
            className={`
              relative flex items-center w-full
              rounded-xl sm:rounded-2xl
              bg-slate-900/80 backdrop-blur-sm
              border-2 transition-all duration-300
              px-4 sm:px-6 py-3 sm:py-4
              ${
                isFocused
                  ? "border-white/30"
                  : "border-white/10 hover:border-white/20"
              }
            `}
          >
            <div className="shrink-0">
              <Search
                className={`
                  w-5 h-5 sm:w-6 sm:h-6 transition-colors duration-200
                  ${isFocused ? "text-white" : "text-white/40"}
                `}
              />
            </div>

            <input
              type="text"
              placeholder="Search for movies, TV shows, people..."
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="
                flex-1
                bg-transparent
                outline-none
                text-white
                placeholder:text-white/40
                text-base sm:text-lg
                mx-3 sm:mx-4
                min-w-0
              "
            />

            {text && (
              <button
                type="button"
                onClick={handleClear}
                className="
                  shrink-0
                  p-1.5 sm:p-2
                  rounded-lg
                  bg-white/5
                  hover:bg-white/10
                  text-white/60
                  hover:text-white
                  transition
                  active:scale-95
                "
                aria-label="Clear search"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            )}

            <button
              type="submit"
              disabled={!text.trim()}
              className={`
                shrink-0
                ml-2 sm:ml-3
                px-4 sm:px-6
                py-2 sm:py-2.5
                rounded-lg sm:rounded-xl
                font-medium
                text-sm sm:text-base
                transition
                ${
                  text.trim()
                    ? "bg-gray-50 text-slate-900 hover:bg-white/90 active:scale-95"
                    : "bg-white/5 text-white/30 cursor-not-allowed"
                }
              `}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
