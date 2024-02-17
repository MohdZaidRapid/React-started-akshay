import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    //action -> reducer fuction modifies store
    // action.payload ="pizza"
    addItem: (state, action) => {
      // we mutating the state here
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

// action is api communicate to redux store
