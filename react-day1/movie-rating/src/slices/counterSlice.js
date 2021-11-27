import { createSlice } from '@reduxjs/toolkit';

// 第3步： 创建redux的slice包括：slice名称，该slice的初始状态，reducers等。slice是store中的一个组成部分。
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount
} = counterSlice.actions;

export default counterSlice.reducer;
