import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import thunkMiddleware from 'redux-thunk';
import heroReducer from "./reducer/fetchHero";

const rootReducer = combineReducers({
  hero: heroReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;

