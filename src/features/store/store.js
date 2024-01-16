import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
// Import the slice reducers here.
import { cartReducer } from '../../features/cart/cartSlice.js';
import {searchTermReducer} from '../../features/search/searchSlice.js';
// Create and export the store here.
const persistConfig = {
  key: 'cart',
  storage,
};

const reducers = combineReducers({ cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
      }),
});