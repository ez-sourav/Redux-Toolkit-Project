import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCollection,
  removeTost,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (item) => {
    dispatch(removeCollection(item.id));
    dispatch(removeTost());
  };

  return (
    <div
      className="
        relative
        w-full
        aspect-3/4
        rounded-xl
        overflow-hidden
        bg-[#020617]
        border border-white/10
        transition
        hover:border-white/20
        group
      "
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      >
        {item.type === "photo" && (
          <img
            src={item.src}
            loading="lazy"
            decoding="async"
            alt=""
            className="
              w-full h-full
              object-cover
              transition-transform duration-300
              group-hover:scale-[1.03]
            "
          />
        )}

        {item.type === "video" && (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            preload="metadata"
            className="w-full h-full object-cover"
          />
        )}

        {item.type === "gif" && (
          <img src={item.src} alt="" className="w-full h-full object-cover" />
        )}
      </a>

     
      <div
        className="
          absolute bottom-0 left-0 w-full
          px-3 sm:px-4 py-3
          flex justify-between items-center gap-3
          bg-linear-to-t from-black/70 via-black/40 to-transparent
        "
      >
        <h2 className="text-sm sm:text-base font-medium text-white truncate">
          {item.title}
        </h2>

        <button
          onClick={() => removeFromCollection(item)}
          className="
            shrink-0
            px-3 py-1.5
            text-xs sm:text-sm
            rounded-md
            bg-red-500
            text-white
            hover:bg-white/20
            transition
            active:scale-95
          "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
