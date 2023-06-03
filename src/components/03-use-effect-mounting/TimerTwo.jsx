import { useState, useEffect } from "react"; // <== IMPORT

function TimerTwo() {
  const [count, setCount] = useState(0);

  // Add the effect in the function body
  useEffect(() => {
    console.log("Mounting component TimerTwo!");
    setInterval(() => {
      console.log("Update count!");
      setCount(state => state + 1);
    }, 1000);
  }, []);

  return (
    <div className="Timer">
      <h2>Timer Two</h2>

      <h3>{count}</h3>
    </div>
  );
}

export default TimerTwo;
