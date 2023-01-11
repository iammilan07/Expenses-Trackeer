import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "../slice/expenses";
import categorySlice from "../slice/category"



export const store = configureStore({
  reducer: {
    expenseList: expenseSlice,
    categoryList: categorySlice

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
