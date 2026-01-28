import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state)=>state.search.activeTab)
  return (
    <div className="flex gap-5 p-10">
      {tabs.map((elem, idx) => {
        return (
          <button
            className={`${(activeTab == elem ? 'bg-blue-800':'bg-sky-600')} font-semibold capitalize cursor-pointer active:scale-95 px-6 py-2 rounded-md`}
            onClick={()=>{
                dispatch(setActiveTabs(elem))
            }}
            key={idx}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
