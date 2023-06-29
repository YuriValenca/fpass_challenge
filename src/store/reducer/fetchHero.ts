import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { emptyHeroObject } from "../../helpers/emptyHeroObject";
import { Hero } from "../types";
import { fetchHero } from "../actions/fetchHero";

interface HeroState {
  isLoading: boolean;
  error: string | null;
  hero: Hero;
}

const initialState: HeroState = {
  isLoading: false,
  error: null,
  hero: emptyHeroObject,
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchHero.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchHero.fulfilled, (state, action: PayloadAction<Hero>) => {
      state.isLoading = false;
      state.error = null;
      state.hero = action.payload;
    });
    builder.addCase(fetchHero.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message ?? "Unknown error occurred";
      state.hero = emptyHeroObject;
    });
  },
});

export default heroSlice.reducer;
