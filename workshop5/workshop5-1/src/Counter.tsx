import React, { useState } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter Exercise - Solution</h1>
      <div className="counter-value">{count}</div>
      <div className="button-group">
        <button
          onClick={() => setCount((prevCount) => prevCount + 1)}
          className="counter-button increment-btn"
        >
          + เพิ่ม
        </button>
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          className="counter-button decrement-btn"
        >
          - ลด
        </button>
        <button
          onClick={() => setCount(() => 0)}
          className="counter-button reset-btn"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;