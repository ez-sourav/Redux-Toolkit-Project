import { Trash2, Download } from "lucide-react";
import { useDispatch } from "react-redux";
import {
  downloadFailedToast,
  downloadSuccessToast,
  removeCollection,
  removeTost,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCollection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(removeCollection(item.id));
    dispatch(removeTost());
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const response = await fetch(item.src);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = `${item.type}-${item.id}`;
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(blobUrl);
      dispatch(downloadSuccessToast());
    } catch (err) {
      dispatch(downloadFailedToast());
    }
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
      <span
        className="
          absolute top-2 left-2 z-10
          text-xs uppercase
          px-2 py-1
          rounded-md
          bg-black/70
          text-white
          backdrop-blur
        "
      >
        {item.type}
      </span>

      <button
        onClick={handleDownload}
        title="Download"
        className="
          absolute top-2 right-2 z-10
          h-8 w-8
          flex items-center justify-center
          rounded-md
          bg-black/70
          text-white
          hover:bg-black/90
          transition
          active:scale-95
          hover:cursor-pointer

          opacity-100 sm:opacity-0
          sm:group-hover:opacity-100
        "
      >
        <Download size={16} />
      </button>

      <a rel="noopener noreferrer" className="absolute inset-0">
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
            muted
            loop
            preload="metadata"
            playsInline
            className="w-full h-full object-cover"
            onMouseEnter={(e) => e.currentTarget.play()}
            onMouseLeave={(e) => e.currentTarget.pause()}
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
    flex items-center gap-3
    bg-linear-to-t from-black/70 via-black/40 to-transparent

    opacity-100 sm:opacity-0
    sm:group-hover:opacity-100
    transition-opacity duration-200
  "
      >
        <h2
          className="
      flex-1
      min-w-0
      text-sm sm:text-base
      font-medium
      text-white
      truncate
    "
          title={item.title}
        >
          {item.title}
        </h2>

        <button
          onClick={removeFromCollection}
          title="Remove"
          className="
      shrink-0
      h-9 w-9
      flex items-center justify-center
      rounded-md
      bg-red-500
      text-white
      hover:bg-red-600
      hover:cursor-pointer
      transition
      active:scale-95
    "
        >
          <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default CollectionCard;
