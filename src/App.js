import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        // Detail로 가는 라우터
        <Route path="/movie/:id" element={<Detail />}></Route>
        // Home으로 가는 라우터
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
