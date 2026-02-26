import { useEffect, useState } from "react";
import { Header } from "./header";

export const EffectHook = () => {
  const [count, setCount] = useState(0);

  const btnIncrease = () => {
    setCount(count + 1);
  };

  const btnDecrease = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    console.log("Run on every click and at beginning");
    return () => console.log("UseEffect Hook");
  }, [count]);

  return (
    <section className="effect-hook-section">
      <Header text="useEffect Section" />
      Count: {count}
      <div>
        <button type="button" onClick={btnIncrease}>
          Increase
        </button>
        <button type="button" onClick={btnDecrease}>
          Decrease
        </button>
      </div>
    </section>
  );
};
