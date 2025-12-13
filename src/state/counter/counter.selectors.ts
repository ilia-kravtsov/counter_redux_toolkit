import type { RootState } from './counter.store';

export const selectCount = (state: RootState) => state.counter.count;
export const selectStep = (state: RootState) => state.counter.step;
export const selectLastUpdatedBy = (state: RootState) => state.counter.lastUpdatedBy;
