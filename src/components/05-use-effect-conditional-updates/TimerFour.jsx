// ./src/components/TimerFour.js
import { useState, useEffect } from "react";
import CountValue from "./CountValue";

function TimerFour() {
  const [count, setCount] = useState(0);

  // 2. As you may have noticed useEffect takes a second argument `[]` which is the dependency array of values that the effect depends on.
  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Return a "clean-up function" which will run automatically
    // before the component is removed from the DOM
    return () => {
      clearInterval(id);
      console.log("Unmounting!");
    };
  }, []);

  // Add a new effect that will run only
  // when the `count` value updates
  useEffect(() => {
    if (count === 3) {
      console.log("Count is 3!");
    }

    console.log("Counter update!!");
  }, [count]);

  return (
    <div className="Timer">
      <h2>Timer Four</h2>

      <CountValue count={count} />
    </div>
  );
}

export default TimerFour;
