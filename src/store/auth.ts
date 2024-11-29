import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLoggedIn: false,
  showLogin: false,
  token: "",
  theme: "light",
  email: "",
  user: null,
  userDetails: {},
  otpFor: 'register',
  tempToken: '',
  showAccessCode: false
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setCredentials(state, action) {
      state.isLoggedIn = true;
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.showLogin = false;
      localStorage.setItem("token", token);
      localStorage.setItem("user", user);
      localStorage.setItem("isLoggedIn", 'true');
    },
    setToken(state, action) {
      state.isLoggedIn = true;


      state.token = action.payload;
      state.showLogin = false;
      localStorage.setItem("token",  action.payload);
      localStorage.setItem("isLoggedIn", 'true');
    },
    setTempToken(state, action) {
      state.tempToken = action.payload;
    },
    setShowAccessCode(state, action) {
      state.showAccessCode = action.payload;
    },
    setUserDetails(state, action) {
      state.userDetails = action.payload;
      localStorage.setItem("userDet", JSON.stringify(action.payload));
    },
    setThemeStore(state, action) {
      state.theme = action.payload;
    },
    setEmailStore(state, action) {
      state.email = action.payload;
    },
    setOtpFor(state, action) {
      state.otpFor = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
      state.token = "";
      state.showLogin = false;
      state.userDetails = {};

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("userDet");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("config");
      state.user = null;

    },
    openModal: (state) => {
      state.showLogin = true;
    },
    closeModal: (state) => {
      state.showLogin = false;
    },

  },
});

export const {
  setCredentials,
  setUserDetails,
  logout,
  openModal,
  closeModal,
  setThemeStore,
  setEmailStore,
  setOtpFor,
  setToken,
  setTempToken,
  setShowAccessCode
} = authSlice.actions;

export default authSlice.reducer;

// export const getUser = (state) => {
//   if (state && state.auth.user) {
//     return state.auth.user;
//   } else {
//     const user = localStorage.getItem("user");
//     if (user) {
//       setCredentials({ user: user, token: getToken() });
//       return user;
//     } else {
//       return null;
//     }
//   }
// };

// export const getToken = (state) => {
//   if (state && state.auth.token) {
//     return state.auth.token;
//   } else {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setCredentials({ user: {}, token });
//       return token;
//     } else {
//       return null;
//     }
//   }
// };

// export const getUserDetails = (state) => {
//   if (state && state.auth.userDetails && state.auth.userDetails.email) {
//     return state.auth.userDetails;
//   } else {
//     const userDet = localStorage.getItem("userDet");
//     if (userDet) {
//       const userDetails = JSON.parse(userDet);
//       setUserDetails([{ userDetails }]);
//       return userDetails;
//     } else {
//       return null;
//     }
//   }
// };
