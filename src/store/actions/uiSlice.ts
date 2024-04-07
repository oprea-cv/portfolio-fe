import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UiState {
  scrollYContainer: number;
}

const initialState: UiState = {
  scrollYContainer: 0,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollYContainer: (state, action: PayloadAction<number>) => {
      state.scrollYContainer = action.payload;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
