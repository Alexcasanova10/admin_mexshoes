import { configureStore } from '@reduxjs/toolkit';
import {productListReducer} from './Reducers/Product';

const store = configureStore({
  reducer: {
    productListReducer: productListReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;


