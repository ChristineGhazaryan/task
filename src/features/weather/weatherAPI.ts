import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URLS } from "../../type";

export const getDailyWether = createAsyncThunk("get/DailyWether", async () => {
  const { data } = await axios.get(URLS.DAILY_WETHER);
  return data;
});

export const getCurrentWether = createAsyncThunk(
  "get/CurrentWether",
  async () => {
    const { data } = await axios.get(URLS.CURRENT_WEATHER);
    return data;
  }
);

export const searchWether = createAsyncThunk(
  "get/searchWether",
  async (text: string) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=09e8a08d77d881dbe391b036f1e007dd`
    );
    return data;
  }
);
