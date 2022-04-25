const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

const cartSclice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // return[...state,action.payload]
      // return[...state,action.data]
      state.push(action.payload);
    },
    remove(state, action) {
      state = state.filter((item) => item.id !== action.payload);
    },
  },
});


export const {add,remove} = cartSclice.actions;