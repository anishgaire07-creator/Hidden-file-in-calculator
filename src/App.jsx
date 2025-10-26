import Calculator from "./Calculator.jsx";
import Hide from "./Hide.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/Hide" element={<Hide />} />
      </Routes>
    </Router>
    </div>
  );
}
export default App;
