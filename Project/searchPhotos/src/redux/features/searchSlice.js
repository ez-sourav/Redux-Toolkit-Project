import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
    page: 1,
    maxPages: 1,
    noMoreResults: false,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.page = 1;
      state.maxPages = 1;
      state.noMoreResults = false;
    },


    setActiveTabs(state, action) {
      state.activeTab = action.payload;
      state.page = 1;
      state.maxPages = 1;
      state.noMoreResults = false;
    },


    setPage(state, action) {
      state.page = action.payload;
    },
    setMaxPages(state, action) {
      state.maxPages = action.payload;
    },

    setNoMoreResults(state, action) {
      state.noMoreResults = action.payload;
    },

    setResults(state, action) {
      state.results = action.payload;
      state.loading = false;
    },

    setLoading(state, action) {
      state.loading = action.payload;
      if (action.payload) {
        state.results = [];
        state.error = null;
        state.noMoreResults = false;
      }
    },


    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },

    clearResults(state) {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setResults,
  setLoading,
  setError,
  clearResults,
  setPage,
  setMaxPages,
  setNoMoreResults,
} = searchSlice.actions;

export default searchSlice.reducer;
