import { useState } from "react";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-5 bg-gray-900 p-10"
      >
        <input
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          className="w-full border-2 px-5 py-2 text-white text-xl rounded-md outline-none"
          type="text"
          placeholder="Search Anything..."
          required
        />
        <button className="cursor-pointer active:scale-95 border-2 px-5 py-2 text-white text-xl rounded-md outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
