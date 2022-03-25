import { HashRouter, Routes, Route } from "react-router-dom";
import DriverDetails from "./components/DriverDetails";
import Home from "./components/Home";
import NewDriver from "./components/NewDriver";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/new" element={<NewDriver />} />
          <Route exact path="/details/:id" element={<DriverDetails />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
