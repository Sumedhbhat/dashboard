import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Age from "./components/Age";
import Employee from "./components/Employee";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/age' exact element={<Age />} />
        <Route path='/employee' exact element={<Employee />} />
      </Routes>
    </Router>
  );
};

export default App;
