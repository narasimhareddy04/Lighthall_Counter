import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(
    parseInt(localStorage.getItem("count")) || 0
  );

  function increaseHandler() {
    setCount(count + 1);
  }

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Counter</div>
      <div className="flex flex-row bg-white justify-center gap-12 p-3 rounded-sm text-[25px] text-[#344151]">
        <button
          onClick={increaseHandler}
          className="border-4 text-center p-2 rounded-3xl border-[#9ac6ed] text-5xl bg-[#F0F8FF]"
        >
          Click
        </button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
      </div>
    </div>
  );
}

export default App;
