import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../feature/apiSlice';
// Import your reducers or API services here


const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // Add other reducers here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
