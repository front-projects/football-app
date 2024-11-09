// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { getUserInfo } from "../util/back/requests";

// export const fetchInitialUser = createAsyncThunk(
//   "user/fetchInitialState",
//   async (token) => {
//     const user = await getUserInfo(token);
//     return user;
//   },
// );

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     info: null,
//     status: "idle",
//     error: null,
//   },
//   reducers: {
//     updateUser: (state, action) => {
//       state.info = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchInitialUser.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchInitialUser.fulfilled, (state, action) => {
//         state.info = action.payload;
//         state.status = "succeeded";
//       })
//       .addCase(fetchInitialUser.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       });
//   },
// });

// export const { updateUser } = userSlice.actions;
// export const userReducer = userSlice.reducer;
