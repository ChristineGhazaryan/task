import { createSlice } from "@reduxjs/toolkit";
import { CurrentWether, StateType } from "../../type";
import { getCurrentWether, getDailyWether, searchWether } from "./weatherAPI";

const initialState: StateType = {
  dailyWetherData: [],
  currentWetherData: {} as CurrentWether,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDailyWether.fulfilled, (state, action) => {
      state.dailyWetherData = action.payload.list;
    });
    builder.addCase(getCurrentWether.fulfilled, (state, action) => {
      state.currentWetherData = action.payload;
    });
    builder.addCase(searchWether.fulfilled, (state, action) => {
      console.log(action.payload);

      state.currentWetherData = action.payload;
    });
  },
});

export default weatherSlice.reducer;
