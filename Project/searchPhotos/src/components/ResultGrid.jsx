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
        dispatch(setLoading());
        let data = [];
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            url:item.links.html
          }));
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
     
          data = response.videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name || "video",
            thumbnail: item.image,
            src: item.video_files[3].link,
            url:item.url
          }));
        }
        if (activeTab == "gif") {
          let response = await fetchGIF(query);
          
          data = response.data.map((item) => ({
            id: item.id,
            type: "gif",
            title: item.title,
            thumbnail: item.images.fixed_height_small_still.url,
            src: item.images.original.url,
            url:item.url
          }));
        }
        dispatch(setResults(data));
      } catch (err) {
        dispatch(setError(err.message));
      }
    };

    getData();
  }, [query, activeTab]);

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading..</h1>;
  return (
    <div className="flex w-full justify-between flex-wrap  gap-6 overflow-auto px-10">
      {results.map((item, idx) => {
        return (
          <div key={idx}>
           
              <ResultCard item={item} />
          
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
