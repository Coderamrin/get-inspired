import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//getting the data with the Thunk Function
export const getQuotes = createAsyncThunk("quotes/getQuotes", async (tag) => {
  return fetch(`https://api.quotable.io/quotes?tags=${tag}`).then((res) =>
    res.json()
  );
});

//Initial State
const initialState = {
  quotes: [],
  loading: false,
  error: false,
};

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  extraReducers: {
    [getQuotes.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },

    [getQuotes.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.quotes = action.payload.results;
    },
    [getQuotes.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export default quoteSlice.reducer;
