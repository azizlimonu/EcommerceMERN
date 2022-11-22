import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { getTotals } from './reducer/cartSlice';
import productReducer, { fetchProduct } from './reducer/productSlice';
import { productsApi } from './reducer/getProductApi'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(fetchProduct());
store.dispatch(getTotals());