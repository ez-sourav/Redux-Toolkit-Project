import { useDispatch } from "react-redux";
import { addCollection, addedTost } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();

  const addToCollection = (item) => {
    dispatch(addCollection(item));
    dispatch(addedTost());
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
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            alt=""
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
          <img src={item.src} className="w-full h-full object-cover" alt="" />
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
          onClick={() => addToCollection(item)}
          className="
            shrink-0
            px-3 py-1.5
            text-xs sm:text-sm
            rounded-md
            bg-red-500
            text-white
            hover:bg-red-600
            transition
            hover:cursor-pointer
            active:scale-95
          "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
