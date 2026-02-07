import { useDispatch } from "react-redux";
import { addCollection, addedTost,downloadSuccessToast,
  downloadFailedToast, } from "../redux/features/collectionSlice";
import { Download } from "lucide-react";

const ResultCard = ({ item }) => {
  const dispatch = useDispatch();


  const addToCollection = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addCollection(item));
    dispatch(addedTost());
  };


  const handleDownload = async (e) => {
  e.preventDefault();
  e.stopPropagation();

  try {
    const response = await fetch(item.src);

    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }

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
    console.error("Download failed", err);
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

      
      <button
        onClick={handleDownload}
        title="Download"
        className="
          absolute top-2 right-2 z-10
          h-8 w-8
          flex items-center justify-center
          rounded-md
          bg-black/60
          text-white
          hover:bg-black/80
          transition
          active:scale-95
          hover:cursor-pointer
          opacity-100 sm:opacity-0
          sm:group-hover:opacity-100
        "
      >
        <Download size={16} />
      </button>

      <div
        className="
          absolute bottom-0 left-0 w-full
          px-3 sm:px-4 py-3
          flex justify-between items-center gap-3
          bg-linear-to-t from-black/70 via-black/40 to-transparent

          opacity-100 sm:opacity-0
          sm:group-hover:opacity-100
          transition-opacity duration-200
        "
      >
        <h2 className="text-sm sm:text-base font-medium text-white truncate">
          {item.title}
        </h2>

        <button
          onClick={(e) => addToCollection(e, item)}
          className="
            shrink-0
            px-3 py-1.5
            text-xs sm:text-sm
            rounded-md
            bg-red-500
            text-white
            hover:bg-red-600
            hover:cursor-pointer
            transition
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
