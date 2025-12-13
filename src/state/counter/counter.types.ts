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

export interface CounterActions {
  increment(): void;
  decrement(): void;
  reset(): void;
  setStep(step: number): void;
}

export type CounterStore = CounterState & CounterActions;
