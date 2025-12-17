export type LastUpdatedBy =
  | 'increment'
  | 'decrement'
  | 'reset'
  | null;

export interface CounterState {
  count: number;
  step: number;
  lastUpdatedBy: LastUpdatedBy;
}

