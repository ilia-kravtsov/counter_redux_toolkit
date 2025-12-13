import {selectLastUpdatedBy} from "../state/counter/counter.selectors.ts";
import {useSelector} from "react-redux";

export default function LastUpdated() {
  const lastUpdatedBy = useSelector(selectLastUpdatedBy);

  return (
    <div>
      Last updated by: {lastUpdatedBy ?? '-'}
    </div>
  );
}
