import { useDispatch, useSelector } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setQuery,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loadinger, error } = useSelector(
    (store) => store.search,
  );

  useEffect(() => {
    const getData = async () => {
      let data;
      if (activeTab == "photos") {
        let response = await fetchPhotos(query);
        data = response.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
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
        }));
      }
      console.log(data);
    };

    getData();
  }, [query, activeTab]);
  return <div></div>;
};

export default ResultGrid;
