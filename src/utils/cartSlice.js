import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    //action -> reducer fuction modifies store
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// {
//     actions:{
//         addItem,
//     },
//     reducer
// }
export const { addItem, clearCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

// action is api commuticate to redux store
