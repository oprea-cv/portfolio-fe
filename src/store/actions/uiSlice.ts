import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MotionValue } from "framer-motion";

interface UiState {
  scrollYContainer: number;
  isScrolling: boolean;
  scrollY: MotionValue<number>
}

const initialScrollYValue = new MotionValue<number>();

const initialState: UiState = {
  scrollYContainer: 0,
  isScrolling: false,
  scrollY: initialScrollYValue
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setScrollYContainer: (state, action: PayloadAction<{num: number, scrollY: any}>) => {
      state.scrollYContainer = action.payload.num;
      state.isScrolling = action.payload.num > 0;
      state.scrollY = action.payload.scrollY;
    },
  },
});

export const uiReducer = uiSlice.reducer;
export const uiActions = uiSlice.actions;
