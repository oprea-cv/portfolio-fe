import { api } from "@/store/api/apiConfig";
import { combineReducers } from "@reduxjs/toolkit";
import { uiReducer } from "./actions/uiSlice";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  ui: uiReducer,
});
