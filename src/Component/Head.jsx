import React, { useEffect, useState } from "react";
import { toggleMenu } from "./Utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { YoutubeSuggestionApi } from "./Contanst";
import { cacheResults } from "./Utils/searchSlice";
// import './App.css';

const Head = () => {
  const [searchQuery, setSearhQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState([]);
  const [showOption, setShowOption] = useState(false);

  const searchCacher = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCacher[searchQuery]) {
        setShowSuggest(searchCacher[searchQuery]);
      } else {
        getSuggesion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSuggesion = async () => {
    const data = await fetch(YoutubeSuggestionApi + searchQuery);
    const json = await data.json();
    console.log("API calls : " + searchQuery);
    setShowSuggest(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const dispatch = useDispatch();
  const toggleMenuHandle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandle()}
          className="h-8 cursor-pointer"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp&w=256"
          alt="hambergger menu"
        />
        <img
          className="h-4 px-2 my-2 cursor-pointer"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/YouTube_TV_logo.svg/1280px-YouTube_TV_logo.svg.png"
          alt="Youtube logo"
        />
      </div>
      <div className="col-span-10 ">
        <div>
          <input
            className=" w-2/4   outline-none px-4 h-10 pt-0.5  rounded-l-full  border border-gray-900 "
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearhQuery(e.target.value)}
            onFocus={() => setShowOption(true)}
            onBlur={() => setShowOption(false)}
          />
          <button className="border border-gray-900 w-10 h-10 pb-3 rounded-r-full">
            <img
              className="h-4 px-2 mt-3"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s"
              alt="search logo"
            />
          </button>
        </div>
        {showOption && (
          <div className="suggestion  absolute bg-white py-2 px-4 rounded-lg shadow-xl w-2/5 border border-gray">
            <ul>
              {showSuggest.map((s) => (
                <li key={s} className="hover:bg-gray-100 cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
