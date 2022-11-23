import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';
import { url } from "./apiSlice";

const initialState = {
  items: [],
  status: null,
  createStatus: null,
};

export const fetchProduct = createAsyncThunk(
  "products/fetchProduct", async () => {
    try {
      const response = await axios.get(`${url}/products`);
      return response.data;
    } catch (error) {
      console.log("Error fetch product", error);
    }
  }
);

export const createProduct = createAsyncThunk();

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "rejected";
      })
  }
});

export default productSlice.reducer;