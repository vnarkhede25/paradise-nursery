import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      const plant = state.items.find(
        item => item.id === action.payload.id
      );
      if (plant) {
        plant.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
      const item = state.items.find(
        item => item.id === action.payload.id
      );
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity <= 0) {
          state.items = state.items.filter(
            plant => plant.id !== action.payload.id
          );
        }
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
