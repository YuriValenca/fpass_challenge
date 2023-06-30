import { createAsyncThunk } from "@reduxjs/toolkit";
import { Hero } from "../types";
import axios from "axios";
import { urlGenerator } from "../../helpers/urlGenerator";


export const fetchHero = createAsyncThunk<Hero, string>('', async (name: string) => {
  const response = await axios.get(
    urlGenerator(), {
    params: {
      nameStartsWith: name
    }
  }
  );
  const hero: Hero = {
    id: response.data.data.results[0].id,
    name: response.data.data.results[0].name,
    description: response.data.data.results[0].description,
    thumbnail: {
      path: response.data.data.results[0].thumbnail.path,
      extension: response.data.data.results[0].thumbnail.extension
    },
    comics: response.data.data.results[0].comics.available,
    series: response.data.data.results[0].series.available,
    stories: response.data.data.results[0].stories.available,
    events: response.data.data.results[0].events.available,
  };
  return hero;
});
