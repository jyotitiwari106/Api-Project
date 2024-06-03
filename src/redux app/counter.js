import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { decrement, increment, incrementByAmount } from "./couterslice";

export function Counters() {
  const count = useSelector((i) => i.counter.value);

  const dispatch = useDispatch();

  console.log(count);
  return (
    <div>
      <div className="flex gap-5 justify-center">
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increase 5
        </Button>
      </div>
    </div>
  );
}
