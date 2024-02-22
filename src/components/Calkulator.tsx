import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus } from "../redux/tools/calkulatorSlice";

const Calkulator = () => {
  const calk = useSelector((state) => state);
  console.log(calk);

  const dispach = useDispatch();
  const [firstVlaue, setFirstValue] = useState("");
  const [secondVlaue, setSecondValue] = useState("");

  const plusFunc = () => {
    dispach(plus(firstVlaue));
  };

  return (
    <div>
      <input
        type="number"
        value={firstVlaue}
        onChange={(e) => setFirstValue(e.target.value)}
      />
      <input
        type="number"
        value={secondVlaue}
        onChange={(e) => setSecondValue(e.target.value)}
      />
      <button onClick={plusFunc}>+</button>
      <button>-</button>
      <button>*</button>
      <button>/</button>
    </div>
  );
};

export default Calkulator;
