import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from './apiSlice';

const initialState = {
  items: [],
  status: null,
  createStatus: null
};

export const productsFetch = createAsyncThunk("products/productsFetch",
  async () => {
    try {
      const response = await axios.get(`${url}/api/products`);
      return response.data
    } catch (error) {
      console.log(error);
    }
  }
);

export const productsCreate = createAsyncThunk("products/productCreate",
  async (values) => {
    try {
      const response = await axios.post(`${url}/api/products`, values);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    // products fetch
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
    // create Products
    [productsCreate.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [productsCreate.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.createStatus = "success";
    },
    [productsCreate.rejected]: (state, action) => {
      state.createStatus = "rejected";
    },
  }
});

export default productsSlice.reducer;