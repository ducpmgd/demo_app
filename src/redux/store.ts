import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import type { PreloadedState } from "@reduxjs/toolkit";

const reducers = combineReducers({
  product: productReducer,
});

export const setUpstore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: reducers,
    preloadedState,
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>;
export type AppStore = ReturnType<typeof setUpstore>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore["dispatch"];
