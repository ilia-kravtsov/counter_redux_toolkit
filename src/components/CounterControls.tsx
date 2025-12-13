import {useDispatch} from "react-redux";
import { increment, decrement, reset } from '../state/counter/counter.slice';
import type {AppDispatch} from "../state/counter/counter.store.ts";

export default function CounterControls() {
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
