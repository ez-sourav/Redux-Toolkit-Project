import React from "react";
import SearchBar from "../components/SearchBar";
import Tabs from "../components/Tabs";
import ResultGrid from "../components/ResultGrid";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { query } = useSelector((store) => store.search);
  return (
    <div>
      <div className="flex justify-between items-center  py-6 px-10 bg-(--c2)">
        <h1 className="text-[22px] font-medium">Media Search</h1>
        <div className="flex gap-5 text-[22px] items-center">
            <Link to='/'>Search</Link>
        <Link to='/collection'>Collection</Link>
        </div>
      </div>
      <SearchBar />
      {query != '' ? <div><Tabs />
      <ResultGrid /></div>:''}
    </div>
  );
};

export default HomePage;
