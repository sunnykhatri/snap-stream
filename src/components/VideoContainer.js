import React, { useState, useEffect } from "react";
import { YOUTUBE_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_POPULAR_API);
    const videos = await data.json();
    if (videos?.items) setVideos(videos?.items);
  };

  if (!videos) return;

  return (
    <div className="flex flex-wrap my-4">
      {videos.map((video) => {
        return <Link key={video.id} to={`/watch?v=${video.id}`}><VideoCard info={video} /></Link>;
      })}
    </div>
  );
};

export default VideoContainer;
