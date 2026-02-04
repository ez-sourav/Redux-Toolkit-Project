import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        dispatch(setLoading(true));
        let data = [];

        if (activeTab === "photos") {
          const response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description || "photo",
            src: item.urls.full,
            url: item.links.html,
          }));
        }

        if (activeTab === "videos") {
          const response = await fetchVideos(query);
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            src: item.video_files[3]?.link,
            url: item.url,
          }));
        }

        if (activeTab === "gif") {
          const response = await fetchGIF(query);
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
  }, [query, activeTab, dispatch]);

  if (error) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center px-4">
      <h2 className="text-3xl sm:text-4xl font-semibold text-white/80">
        Oops! Something went wrong
      </h2>

      <p className="mt-4 text-white/50 max-w-md">
        We couldn’t load the results right now.
        Please check your internet connection or try again.
      </p>

      <button
        onClick={() => window.location.reload()}
        className="mt-8 px-6 py-2 rounded-md
                   bg-white/10 hover:bg-white/20
                   text-white transition"
      >
        Try Again
      </button>
    </div>
  );
}


  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6">
        {Array(12)
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-4 sm:px-6">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
