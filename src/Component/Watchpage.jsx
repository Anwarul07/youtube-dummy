import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "./Utils/appSlice";
import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { combineSlices } from "@reduxjs/toolkit";
import CommentsContainer from "./CommentsContainer";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get(("v")));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
   <div className="flex flex-col">
     <div className=" px-4">
      <iframe
        width="950"
        height="420"
        src={"https://www.youtube.com/embed/"+ searchParams.get(("v"))}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <CommentsContainer/>
   </div>
  );
};

export default Watchpage;
