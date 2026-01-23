import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmmount,
} from "./features/counterSlice";
import { useState } from "react";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const [num, setnum] = useState();

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setnum(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(incrementByAmmount(Number(num)));
        }}
      >
        Increment By Ammount
      </button>
    </div>
  );
};

export default App;
