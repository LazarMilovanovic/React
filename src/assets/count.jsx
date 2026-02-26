import { useState } from "react";
import { Header } from "../header";

export const Buttons = () => {
  const [count, setCount] = useState(0);

  const btnIncrease = () => {
    setCount(count + 1);
  };

  const btnDecrease = () => {
    setCount(count - 1);
  };
  return (
    <section className="count-section">
      <Header text="useState Section" />
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
