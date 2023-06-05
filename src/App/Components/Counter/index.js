import { useState } from "react";

export default function Counter({ startValue = 0 }) {
  const [currentValue, setValue] = useState(startValue);

  return (
    <>
      <p>{startValue}</p>
      <button
        onClick={() => {
          setValue(currentValue + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
}
