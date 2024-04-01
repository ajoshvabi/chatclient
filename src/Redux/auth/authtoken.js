// // authSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// // Define the initial state for authentication
// const initialState = {
//   token: '', // Replace with your initial token
// };

// // Create an authentication slice using createSlice from Redux Toolkit
// export const authSlice = createSlice({
//   name: 'auth', // Name of the slice
//   initialState, // Initial state
//   reducers: {
//     setToken: (state, action) => {
//       console.log(action);
//       state.token = action.payload;
//       console.log(state.token);

//     },
//   },
// });

// // Extract the action creator
// export const { setToken } = authSlice.actions;

// // Export the reducer function
// export default authSlice.reducer;
