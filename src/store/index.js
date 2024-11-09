import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth-slice";
// import { fetchInitialUser, userReducer } from "./user-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

// // const hash = window.location.hash;
// // const hashParams = new URLSearchParams(hash.substring(hash.indexOf("?")));
// const params = new URLSearchParams(window.location.search);

// const login = params.get("data");
// const password = params.get("pmain");

// store.dispatch(fetchInitialToken({ login, password })).then((token) => {
//   store.dispatch(fetchInitialUser(token.payload));
// });

export default store;

// // ?data=userlogin&pmain=password&lang=en
