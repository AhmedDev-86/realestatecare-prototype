import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchInspections } from "../services/api.js";

export const loadInspections = createAsyncThunk(
  "inspections/load",
  async () => {
    const data = await fetchInspections();
    return data;
  }
);

const inspectionsSlice = createSlice({
  name: "inspections",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadInspections.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loadInspections.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(loadInspections.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default inspectionsSlice.reducer;
