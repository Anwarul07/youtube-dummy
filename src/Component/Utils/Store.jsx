import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const Store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chatlive: chatSlice,
  },
});
export default Store;
