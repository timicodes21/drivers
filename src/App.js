import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DriverDetails from "./components/DriverDetails";
import Home from "./components/Home";
import NewDriver from "./components/NewDriver";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<NewDriver />} />
        <Route path="/details/:id" element={<DriverDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
