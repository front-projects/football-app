import { configureStore } from "@reduxjs/toolkit";
import WebApp from "@twa-dev/sdk";
// import { authReducer, fetchInitialToken } from "./auth-slice";
// import { fetchInitialUser, userReducer } from "./user-slice";

const store = configureStore({
  reducer: {
    // auth: authReducer,
    // user: userReducer,
  },
});

// // const hash = window.location.hash;
// // const hashParams = new URLSearchParams(hash.substring(hash.indexOf("?")));
// const params = new URLSearchParams(window.location.search);

const id = WebApp.WebAppUser();
console.log(id.username);
// const login = params.get("data");
// const password = params.get("pmain");

// store.dispatch(fetchInitialToken({ login, password })).then((token) => {
//   store.dispatch(fetchInitialUser(token.payload));
// });

export default store;

// // ?data=userlogin&pmain=password&lang=en
