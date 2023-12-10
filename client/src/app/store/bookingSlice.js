import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: null,
  isLoading: false,
  errors: null
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducer: {
    bookingRequested: (state) => {
      state.isLoading = true;
    }
  }
});
