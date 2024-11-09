import { createSlice } from "@reduxjs/toolkit";
// import { getToken } from "../util/back/requests";

// export const fetchInitialToken = createAsyncThunk(
//   "auth/fetchInitialState",
//   async (login, password) => {
//     const token = await getToken(login, password);
//     return token;
//   },
// );

export const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchInitialToken.pending, (state) => {
  //         state.status = "loading";
  //       })
  //       .addCase(fetchInitialToken.fulfilled, (state, action) => {
  //         state.token = action.payload;
  //         state.status = "succeeded";
  //       })
  //       .addCase(fetchInitialToken.rejected, (state, action) => {
  //         state.status = "failed";
  //         state.error = action.error.message;
  //       });
  //   },
});

export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
