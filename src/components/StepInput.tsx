import type {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectStep} from "../state/counter/counter.selectors.ts";
import {setStep} from "../state/counter/counter.slice.ts";

export default function StepInput() {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) dispatch(setStep(value));
  };

  return (
    <input
      type="number"
      value={step}
      onChange={handleChange}
    />
  );
}
