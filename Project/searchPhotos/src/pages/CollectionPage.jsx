import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection, clearToast } from "../redux/features/collectionSlice";
import { Trash2 } from "lucide-react";
import { Inbox } from "lucide-react";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch(clearCollection());
    dispatch(clearToast());
  };

  return (
    <div className="px-4 sm:px-6 py-6">
      {collection.length > 0 ? (
        <div className="max-w-7xl mx-auto mb-6 flex items-center justify-between">
          <h2 className="text-lg sm:text-2xl font-medium text-white">
            Your Collection
          </h2>

          <button
            onClick={clearAll}
            className="
    flex items-center justify-center gap-2
    px-4 py-2
    rounded-md
    text-sm sm:text-base
    font-medium
    bg-red-500
    text-white
    hover:bg-red-600
    transition
    active:scale-95
  "
          >
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="inline sm:hidden">Clear</span>
            <span className="hidden sm:inline">Clear Collection</span>
          </button>
        </div>
      ) : (
        <div className="flex min-h-[70vh] flex-col items-center justify-center  text-center">
          <Inbox className="w-12 h-12 sm:w-16 sm:h-16 text-white/20 mb-4" />
          <h2 className="text-2xl sm:text-4xl font-medium text-white/50">
            Your collection is empty
          </h2>
          <p className="mt-2 text-sm sm:text-base text-white/30">
            Save photos, videos, or GIFs to see them here
          </p>
        </div>
      )}

      {collection.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
          {collection.map((item) => (
            <CollectionCard key={`${item.type}-${item.id}`} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
