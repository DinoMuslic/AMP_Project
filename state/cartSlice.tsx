import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  item: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const calculateTotalPrice = (items: CartItem[]) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0);

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

      state.totalPrice = calculateTotalPrice(state.items);
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

      state.totalPrice = calculateTotalPrice(state.items);
    },

    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((i) => i.item !== action.payload);
      state.totalPrice = calculateTotalPrice(state.items);
    },

    clear: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { add, decrement, remove, clear } = cartSlice.actions;
export default cartSlice.reducer;
