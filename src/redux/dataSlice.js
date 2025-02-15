import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch(import.meta.env.VITE_APP_DATA_API_KEY);
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    items: [],
    currentItems: [],
    currentIndex: 0,
    hasMore: true,
    
    loading: false,
    error: null,

    regions: [],
    itemsByRegion: {},
    regionItems: [],
    regionIndex: 0,
    selectedRegion: null,
    regionHasMore: false,
  },
  reducers: {
    loadMore: (state) => {
      const nextItems = state.items.slice(state.currentIndex, state.currentIndex + 10);
      state.currentItems.push(...nextItems);
      state.currentIndex += nextItems.length;
      state.hasMore = state.currentIndex < state.items.length;
    },
    resetData: (state) => {
      state.currentItems = [];
      state.currentIndex = 0;
      state.hasMore = true;
    },
    getItemsByRegion: (state, action) => {
      const region = action.payload;
      state.selectedRegion = region;
      state.regionIndex = 0;

      if (state.itemsByRegion[region]) {
        state.regionItems = state.itemsByRegion[region].slice(0, 10);
        state.regionIndex = state.regionItems.length;
        state.regionHasMore = state.regionIndex < state.itemsByRegion[region].length;
      }
      else {
        state.regionItems = [];
        state.regionHasMore = false;
      }
    },
    loadMoreByRegion: (state) => {
      if (state.selectedRegion && state.itemsByRegion[state.selectedRegion]) {
        const nextItems = state.itemsByRegion[state.selectedRegion].slice(
          state.regionIndex,
          state.regionIndex + 10
        );
        state.regionItems.push(...nextItems);
        state.regionIndex += nextItems.length;
        state.regionHasMore = state.regionIndex < state.itemsByRegion[state.selectedRegion].length;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, state => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.items = action.payload;
        state.currentItems = state.items.slice(0, 10);
        state.currentIndex = state.currentItems.length;
        state.hasMore = state.currentIndex < state.items.length;

        state.itemsByRegion = action.payload.reduce((acc, item) => {
          const region = item.region || "Unknown";
          if (!acc[region]) acc[region] = [];
          acc[region].push(item);
          return acc;
        }, {});

        state.regions = Object.keys(state.itemsByRegion);
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});


export const { loadMore, resetData, getItemsByRegion, loadMoreByRegion } = dataSlice.actions;
export default dataSlice.reducer;
