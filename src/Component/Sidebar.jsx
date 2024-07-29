import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import Store from "./Utils/Store";
// import './App.css';

const Sidebar = () => {
  const IsOpen = useSelector((Store) => Store.app.IsOpen);

  //Early Return
  if (!IsOpen) return null;
  return (
    <div className="w-48 shadow-xl font-semibold px-6">
      {/* <h1 className="font-bold mt-2">Subscriptions</h1> */}
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="short">
          <li>Short</li>
        </Link>
        <Link to="video">
          <li>Video</li>
        </Link>
        <Link to="live">
          <li>Live</li>
        </Link>
      </ul>
      <h1 className="font-bold mt-2">Subscriptions</h1>
      <ul>
      <Link to="music">
          <li>Music</li>
        </Link>
        <Link to="sports">
          <li>Sports</li>
        </Link>
        <Link to="gaming">
          <li>Gaming</li>
        </Link>
        <Link to="movies">
          <li>Movies</li>
        </Link>
      </ul>
      <h1 className="font-bold mt-2">Downloads</h1>
      <ul>
      <Link to="watchLater">
          <li>Watch Later</li>
        </Link>
        <Link to="history">
          <li>History</li>
        </Link>
        <Link to="video">
          <li>Downloads</li>
        </Link>
        <Link to="liked">
          <li>Liked</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
