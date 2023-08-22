import { configureStore } from "@reduxjs/toolkit";
import youbikeFilterReducer from "./youbike-filter-slice";
import youbikeDataReducer from "./youbike-data-slice";

const youbikeStore = configureStore({
  reducer: {
    youbikeFilter: youbikeFilterReducer,
    youbikeData: youbikeDataReducer,
  },
});

export default youbikeStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type YoubikeState = ReturnType<typeof youbikeStore.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type YoubikeDispatch = typeof youbikeStore.dispatch;
