import React from "react";
import Buttons from "./Buttons";

const ButtonList = () => {
  return (
    <div className="flex">
      <Buttons name="All" />
      <Buttons name="Gaming" />
      <Buttons name="Mixes" />
      <Buttons name="Videos" />
      <Buttons name="News" />
      <Buttons name="Vlogs" />

      <Buttons name="BBC" />
      <Buttons name="Food" />
      <Buttons name="Education" />
      <Buttons name="Hollywood" />
      <Buttons name="Bolywood" />
      <Buttons name="TikTok" />
      <Buttons name="Sanwariya" />
      <Buttons  name="Dhruv " />

    </div>
  );
};

export default ButtonList;
