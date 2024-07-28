import React, { useEffect } from "react";
import { YoutubeApi } from "./Contanst";
import { useState } from "react";
import VideoCards from "./VideoCards";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YoutubeApi);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCards key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoContainer;
