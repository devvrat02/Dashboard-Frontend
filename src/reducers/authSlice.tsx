import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {   API_LOGIN, API_REGISTER ,API_AUTH} from "../api/auth.service";
import parseJwt from "../utils/authUtils";
// import Cookies from "js-cookie";
import axiosInstance from "../api/axios.instance";

export const login = createAsyncThunk(
  "auth/login",
  async (credentials:any, thunkAPI) => {
    try {
      const data = await API_LOGIN(credentials);
      return data;
    }
    catch (err:any) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const data = await localStorage.getItem('dash-token');
      return data;
    } catch (err:any) {
      return thunkAPI.rejectWithValue(err.response.data)
    }
  }
)
export const register = createAsyncThunk(
    "auth/register",
    async (credentials:any, thunkAPI) => {
      try {
        const data = await API_REGISTER(credentials);
        return data;
      } catch (err:any) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
    }
  )

export const authentication = createAsyncThunk(
    "auth/authentication",
    async (_, thunkAPI) => {
      try {
        const data = await API_AUTH();
        return data;
      } catch (err:any) {
        return thunkAPI.rejectWithValue(err.response.data)
      }
    }
  )
  

const initialState = { 
  loading: false,
  isLogedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLogedIn = true;
      state.user = action.payload
    },
    resetUser(state) {
      state.isLogedIn = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      const token = action.payload.token;
      console.log(token)
      //Cookies.set('token', token, { sameSite : "none", secure: true, httpOnly : true});
      localStorage.setItem('dash-token', token);
      axiosInstance.defaults.headers.common["authorization"] = token;
      const user = parseJwt(token);
      state.user = user
      state.isLogedIn = true;
      state.loading = false;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(authentication.fulfilled, (state, action) => {
      state.user = action.payload
      state.isLogedIn = true;
      state.loading = false;
    });
    builder.addCase(authentication.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authentication.rejected, (state, action) => {
      state.loading = false
    });

    builder.addCase(logout.fulfilled, (state) => {
      localStorage.removeItem('dash-token');
      state.isLogedIn = false;
      state.user = null;
      state.loading = false;
    })
    builder.addCase(logout.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(logout.rejected, (state) => {
      state.loading = false;
    })

    builder.addCase(register.fulfilled, (state, action) => {
      const token = action.payload.token;
      //Cookies.set('token', token, { sameSite : "none", secure: true, httpOnly : true});
      localStorage.setItem('dash-token', token);
      axiosInstance.defaults.headers.common["authorization"] = token;
      const user = parseJwt(token);
      state.user = user
      state.isLogedIn = true;
      state.loading = false;
    });
    builder.addCase(register.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.loading = false
    });
    
  },
});

export const { setUser, resetUser } = authSlice.actions;
export default authSlice.reducer;