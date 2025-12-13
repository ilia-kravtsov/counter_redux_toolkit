import {useSelector} from "react-redux";
import {selectCount} from "../state/counter/counter.selectors.ts";

export default function CounterDisplay() {
  const count = useSelector(selectCount);
  return <div>{count}</div>;
}
