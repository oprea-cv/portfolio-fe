import { uiReducer } from "./actions/uiSlice";
import { api } from "@/store/api/apiConfig";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  ui: uiReducer,
});
