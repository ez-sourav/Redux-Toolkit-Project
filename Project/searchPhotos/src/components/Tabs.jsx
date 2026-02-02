import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="px-4 sm:px-6 mt-4 mb-10">
      <div
        className="
          max-w-4xl mx-auto
          flex gap-3
          overflow-x-auto
          scrollbar-none
        "
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => dispatch(setActiveTabs(tab))}
            className={`
              px-5 py-2
              rounded-full
              text-sm sm:text-base
              font-medium capitalize
              transition
              whitespace-nowrap
              ${
                activeTab === tab
                  ? "bg-white text-slate-900"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }
              active:scale-95
            `}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
