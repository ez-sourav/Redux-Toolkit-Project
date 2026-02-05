import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import {
  setError,
  setLoading,
  setResults,
  setPage,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error, page, maxPages } =
    useSelector((store) => store.search);

  const dispatch = useDispatch();
  const getNearbyPages = (current, total) => {
    const pages = [];

    if (current > 1) pages.push(current - 1);
    pages.push(current);
    if (current < total) pages.push(current + 1);

    return pages;
  };

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query, page, 20);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "photo",
            src: item.urls.regular,
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query, page, 20);

          data = response.videos.map((item) => {
            const fastVideo =
              item.video_files.find(
                (v) => v.quality === "sd" && v.width <= 540,
              ) ||
              item.video_files.find((v) => v.quality === "sd") ||
              item.video_files[0];

            return {
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              src: fastVideo?.link,
              url: item.url,
            };
          });
        }

        if (activeTab === "gif") {
          const response = await fetchGIF(query, page, 20);
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title || "gif",
            src: item.images.original.url,
            url: item.url,
          }));
        }

        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab, page, dispatch]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold text-white/80">
          Oops! Something went wrong
        </h2>

        <p className="mt-4 text-white/50 max-w-md">
          We couldn’t load the results right now. Please check your internet
          connection or try again.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6">
        {Array(20)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="aspect-3/4 rounded-xl bg-white/10 animate-pulse"
            />
          ))}
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6">
        {results.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </div>

      {/* pagination */}
      {results.length > 0 && (
        <div className="mt-10">
          <div className="hidden sm:flex justify-center items-center gap-2">
            <button
              onClick={() => dispatch(setPage(Math.max(1, page - 1)))}
              disabled={page === 1}
              className="
          h-9 w-9 flex items-center justify-center
          rounded-md
          bg-white/10 text-white
          hover:bg-white/20
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
            >
              <ChevronLeft size={18} />
            </button>

            {page > 2 && (
              <>
                <button
                  onClick={() => dispatch(setPage(1))}
                  className="h-9 w-9 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                >
                  1
                </button>
                <MoreHorizontal className="text-white/40" size={18} />
              </>
            )}

            {getNearbyPages(page, maxPages).map((p) => (
              <button
                key={p}
                onClick={() => dispatch(setPage(p))}
                className={`
            h-9 w-9 rounded-md text-sm font-medium hover:cursor-pointer active:scale-95 transition
            ${
              page === p
                ? "bg-white text-black shadow"
                : "bg-white/10 text-white hover:bg-white/20"
            }
          `}
              >
                {p}
              </button>
            ))}

            {page < maxPages - 1 && (
              <>
                <MoreHorizontal className="text-white/40" size={18} />
                <button
                  onClick={() => dispatch(setPage(maxPages))}
                  className="h-9 w-9 rounded-md bg-white/10 text-white hover:bg-white/20 transition"
                >
                  {maxPages}
                </button>
              </>
            )}

            <button
              onClick={() => dispatch(setPage(Math.min(maxPages, page + 1)))}
              disabled={page === maxPages}
              className="
          h-9 w-9 flex items-center justify-center
          rounded-md
          bg-white/10 text-white
          hover:bg-white/20
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex sm:hidden justify-between items-center px-4">
            <button
              onClick={() => dispatch(setPage(Math.max(1, page - 1)))}
              disabled={page === 1}
              className="
          h-9 w-9 flex items-center justify-center
          rounded-md
          bg-white/10 text-white
          disabled:opacity-40
        "
            >
              <ChevronLeft size={18} />
            </button>

            <span className="text-sm text-white/70">
              Page <span className="text-white font-medium">{page}</span> /{" "}
              {maxPages}
            </span>

            <button
              onClick={() => dispatch(setPage(Math.min(maxPages, page + 1)))}
              disabled={page === maxPages}
              className="
          h-9 w-9 flex items-center justify-center
          rounded-md
          bg-white/10 text-white
          disabled:opacity-40
        "
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ResultGrid;
