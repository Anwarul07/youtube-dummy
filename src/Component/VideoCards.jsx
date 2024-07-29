import React from "react";


const VideoCards = ({ info }) => {
  // console.log(info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-64 shadow-xl">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" /> 
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li className="font-semibold">Channel Name : {channelTitle}</li>
        <li> {statistics.viewCount} Views</li>
        <li> {statistics.likeCount}  Likes</li>

      </ul>
    </div>
  );
};

export default VideoCards;
