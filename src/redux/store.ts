import { countCalk } from "./tools/calkulatorSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    countCalk,
  },
});

export default store;
