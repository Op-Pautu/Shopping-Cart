import "./App.css";

import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h1>stuff</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
