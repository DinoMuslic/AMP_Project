import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  item: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ item: string; price: number }>) => {
      const existingItem = state.items.find(
        (i) => i.item === action.payload.item
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const existingItem = state.items.find((i) => i.item === action.payload);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((i) => i.item !== action.payload);
        }
      }
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.item !== action.payload);
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, decrement, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
