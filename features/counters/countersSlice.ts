import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ✅ Type define
type Counter = {
  id: number;
  value: number;
};

// ✅ Initial state type
const initialState: Counter[] = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];

const counterSlice = createSlice({
  name: "counters",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      const counterIndex = state.findIndex(
        (c) => c.id === action.payload
      );
      if (counterIndex !== -1) {
        state[counterIndex].value++;
      }
    },
    decrement: (state, action: PayloadAction<number>) => {
      const counterIndex = state.findIndex(
        (c) => c.id === action.payload
      );
      if (counterIndex !== -1) {
        state[counterIndex].value--;
      }
    },
  },
});

// ✅ export actions
export const { increment, decrement } = counterSlice.actions;

// ✅ export reducer
export default counterSlice.reducer;