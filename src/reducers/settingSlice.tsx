import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_UPDATE_USER } from "../api/setting.service";

export const updateUser = createAsyncThunk(
  "user/edit",
  async (credentials:any, thunkAPI) => {
    try {
      const data = await API_UPDATE_USER(credentials);
      return data;
    }
    catch (err:any) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

const initialState = { 
  loading: false,
  isLogedIn: false,
  updatedUser: null,
};

const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLogedIn = true;
      state.updatedUser = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.updatedUser = action.payload
      state.isLogedIn = true;
      state.loading = false;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false
    });

  },
});

export const { setUser } = settingSlice.actions;
export default settingSlice.reducer;