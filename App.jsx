import { useState } from "react";
import "./style.css";

export default function App() {

  const [display, setDisplay] = useState("");

  const add = (v) => {
    setDisplay((prev) => prev + v);
  };

  const clear = () => {
    setDisplay("");
  };

  const del = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calc = () => {
    try {
      const result = Function("return " + display)();
      setDisplay(result.toString());
    } catch {
      setDisplay("Error");
    }
  };

  const buttons = [
    "AC","DEL","/","*",
    "7","8","9","-",
    "4","5","6","+",
    "1","2","3","=",
    "0","."
  ];

  const handleClick = (btn) => {
    if (btn === "AC") return clear();
    if (btn === "DEL") return del();
    if (btn === "=") return calc();

    add(btn);
  };

  return (
    <div className="container">

      <div className="calculator">

        <h2>Calculator</h2>

        <input
          value={display}
          readOnly
          className="display"
        />

        <div className="buttons">

          {buttons.map((btn, i) => (
            <button
              key={i}
              className={`btn ${
                btn === "=" ? "equal" :
                btn === "AC" ? "clear" :
                btn === "DEL" ? "delete" :
                ["+","-","*","/"].includes(btn) ? "operator" : ""
              }`}
              onClick={() => handleClick(btn)}
            >
              {btn}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}