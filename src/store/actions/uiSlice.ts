import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UiState {
  scrollYContainer: number;
  isScrolling: boolean;
}

const initialState: UiState = {
  scrollYContainer: 0,
  isScrolling: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollYContainer: (state, action: PayloadAction<number>) => {
      state.scrollYContainer = action.payload;
      state.isScrolling = action.payload > 0;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
