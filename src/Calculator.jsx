import "./App.css";
import { useState } from "react";
import {useNavigate } from "react-router-dom";
function Calculator() {
  const [result, setResult] = useState(null);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [activeInput, setActiveInput] = useState("first");
  const navigate = useNavigate();
  const handleNumberClick = (num) => {
    if (activeInput === "first") {
      setFirstNumber((prev) => prev + num);
    } else {
      setSecondNumber((prev) => prev + num);
    }
  };
 const Add = () => {
  if (firstNumber === "" || secondNumber === "") {
    alert("Please enter both numbers!");
    return;}
  const num1 = Number(firstNumber);
  const num2 = Number(secondNumber);
  setResult(num1 + num2);
  if (num1 === 111 && num2 === 222) {
    navigate("/Hide");
  }
};
  const Sub = () => setResult(Number(firstNumber) - Number(secondNumber));
  const Multi = () => setResult(Number(firstNumber) * Number(secondNumber));
  const Divd = () => {
    if (Number(secondNumber) === 0) {
      alert("Not allowed!");
      return;
    }
    setResult(Number(firstNumber) / Number(secondNumber));
  };
  const Clear = () => {
    setFirstNumber("");
    setSecondNumber("");
    setResult(null);
  };
  return (
    <div className="calculator">
      <h1>Welcome to the Calculator App</h1>
      <input type="text" value={firstNumber} onFocus={() => setActiveInput("first")}  readOnly placeholder="First Number"/><br />
      <input type="text"value={secondNumber} onFocus={() => setActiveInput("second")} readOnly placeholder="Second Number"/>
      <br /><br />
      <div className="num-pad">
        {[1,2,3,4,5,6,7,8,9,0].map((num) => (
          <button key={num} onClick={() => handleNumberClick(num)}>
            {num}
          </button>
        ))}
      </div>
      <br />
      <div className="operations">
        <button onClick={Add}>+</button>
        <button onClick={Sub}>-</button>
        <button onClick={Multi}>*</button>
        <button onClick={Divd}>/</button>
        <button onClick={Clear}>C</button>
      </div>

      <h2>Result: {result !== null ? result : "-"}</h2>
    </div>
  );
}

export default Calculator;
