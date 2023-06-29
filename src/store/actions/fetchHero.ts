import { createAsyncThunk } from "@reduxjs/toolkit";
import { Hero } from "../types";
import axios from "axios";
import CryptoJS from "crypto-js";

const getHash = (timeStamp: string, privateKey: string, apiKey: string) => {
  const hash = CryptoJS.MD5(timeStamp + privateKey + apiKey).toString();
  return hash;
};

const baseUrl = "https://gateway.marvel.com:443/v1/public/characters";
const timeStamp = Date.now().toString();
const apiKey = "25baa0dabcd1b7db3228ce639db3eba9";
const privateKey = "6cd3701adcdfab4a2d6fec7518a8c4a8d44ff68d";
const hash = getHash(timeStamp, privateKey, apiKey);

const url = `${baseUrl}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`;


export const fetchHero = createAsyncThunk<Hero, string>('', async (name: string) => {
  const response = await axios.get(
    url, {
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
  console.log(hero);
  console.log(hero.comics)
  return hero;
});
