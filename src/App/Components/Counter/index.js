import { useCounter } from "react-use";

export default function Counter({ startValue = 0, step = 1 }) {
  const [currentValue, { dec, inc }] = useCounter(startValue, null, startValue);

  return (
    <>
      <p>{currentValue}</p>
      <button onClick={() => inc(step)}>+{step}</button>
      <button onClick={() => dec(step)}>-{step}</button>
    </>
  );
}
