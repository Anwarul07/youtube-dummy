import React from "react";
// import './App.css';

const Sidebar = () => {
  return (
    <div className="w-48 shadow-xl font-semibold px-6">
      {/* <h1 className="font-bold mt-2">Subscriptions</h1> */}
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>video</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold mt-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Moves</li>
      </ul>
      <h1 className="font-bold mt-2">Downloads</h1>
      <ul>
        <li>Watch Later</li>
        <li>History</li>
        <li>Likes</li>
        <li>Downlaods</li>
      </ul>
    </div>
  );
};

export default Sidebar;
