import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { CounterState } from './counter.types';

const initialState: CounterState = {
  count: 0,
  step: 1,
  lastUpdatedBy: null,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count += state.step;
      state.lastUpdatedBy = 'increment';
    },
    decrement(state) {
      state.count -= state.step;
      state.lastUpdatedBy = 'decrement';
    },
    reset(state) {
      state.count = 0;
      state.lastUpdatedBy = 'reset';
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  reset,
  setStep,
} = counterSlice.actions;

export default counterSlice.reducer;
