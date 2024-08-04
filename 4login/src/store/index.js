import { configureStore, createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: { isLoggedIn: false },
  reducers: {
    login(state,action) {
      state.isLoggedIn = true;
    },
    logout(state,action) {
      state.isLoggedIn = false;
    },
  },
});

export const actions = loginSlice.actions;

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;