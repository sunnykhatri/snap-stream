import React, { useState, useEffect } from "react";
import { YOUTUBE_POPULAR_API } from "../utils/constants";
import VideoCard from "./VideoCard";

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
        return <VideoCard key={video.id} info={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
